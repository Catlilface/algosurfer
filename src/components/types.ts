import { RouteObject } from "react-router-dom"

export type SidebarItem = RouteObject & {
    title: string
}

export type SidebarNavigation = {
    navMain: {
        title: string
        items: SidebarItem[]
    }[]
}
