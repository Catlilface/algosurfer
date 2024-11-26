import * as React from "react"
import { GalleryVerticalEnd, Minus, Plus, Zap } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { startCase } from "lodash"
import { useGetDirectoriesQuery, useGetDocumentsQuery } from "@/store/api"
import { Link } from "react-router-dom"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data, isLoading } = useGetDirectoriesQuery({})

  if (isLoading) {
    return <SidebarMenuSkeleton />
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-yellow-600 text-sidebar-primary-foreground">
                  <Zap />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">AlgoSurfer</span>
                  <span className="">Algorithm Browser</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data?.map((item, index) => (
              <SidebarItem key={index} path={item.path} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

const SidebarItem = ({ path }: { path: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { data, isFetching } = useGetDocumentsQuery({ path }, { skip: !isOpen })

  return (

    <Collapsible
      className="group/collapsible"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {startCase(path)}{" "}
            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {isFetching ? <SidebarMenuSkeleton /> :
          data?.length && (
            <CollapsibleContent>
              <SidebarMenuSub>
                {data.map((subitem, index) => (
                  <SidebarMenuSubItem key={index}>
                    <SidebarMenuSubButton asChild>
                      <Link to={subitem.path}>{startCase(subitem.name)}</Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )
        }
      </SidebarMenuItem>
    </Collapsible>
  )
}
