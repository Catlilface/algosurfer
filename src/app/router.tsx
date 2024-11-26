import { createHashRouter, Outlet, RouteObject } from "react-router-dom";
import { Layout } from "@/app/dashboard";
import { NotFound } from "@/pages";
import { Home } from "@/pages/home";
import ContentPage from "@/pages/content/content";
import { Skeleton } from "@/components/ui/skeleton";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:category/:article",
        element: <ContentPage />,
    },
] as RouteObject[]

export const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: routes,
        errorElement: <NotFound />,
    },
]);
