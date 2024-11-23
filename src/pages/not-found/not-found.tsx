import { router } from "@/app/router"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowDownAz, ArrowLeft, ArrowUpLeft, Home, LucideArrowUpLeft, Shuffle, SquareArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center h-dvh w-dvw">
            <div className="text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-lg">Page not found</p>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="mt-10" variant="secondary" onClick={() => navigate(-1)}>
                            <ArrowLeft />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Go back</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="mt-10 ml-6" onClick={() => navigate("/")}>
                            <Home />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Go to home page</TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}

export default NotFound
