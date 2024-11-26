import { FC, lazy, Suspense } from "react"
import { SceneProps } from "./types"
import { Cog, Copy, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "../ui/context-menu"

const Scene: FC<SceneProps> = ({ category, article, scene }) => {
    const SceneComponent = lazy(() => import(`@/docs/${category}/${article}/scenes/scene.${scene}.tsx`).catch((error) => ({
        default: () => <SceneNotFound error={error} />
    })))

    return (
        <div className="border rounded-lg px-4 py-2 my-4">
            <Suspense fallback={<Loader2 className="animate-spin mx-auto my-5" />}>
                <SceneComponent />
            </Suspense>
        </div>
    )
}

const SceneNotFound = ({ error }: { error: Error }) => {
    const copyError = () => {
        navigator.clipboard.writeText(error.message)

        toast({
            title: "Copied to clipboard",
            variant: "destructive"
        })
    }

    return (
        <AlertDialog>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <div className="text-center">
                        Scene not found
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <AlertDialogTrigger className="w-full">
                        <ContextMenuItem>
                            <Cog className="w-4 h-4 mr-2" /> Details
                        </ContextMenuItem>
                    </AlertDialogTrigger>
                    <ContextMenuItem onClick={copyError}>
                        <Copy className="w-4 h-4 mr-2" /> Copy error
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{error.name}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {error.message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction onClick={copyError}>Copy error</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Scene
