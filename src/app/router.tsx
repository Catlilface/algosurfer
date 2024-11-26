import { createHashRouter, Outlet, RouteObject } from "react-router-dom";
import { Layout } from "@/app/dashboard";
import { NotFound } from "@/pages";
import { Home } from "@/pages/home";
import ContentPage from "@/pages/content/content";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/docs/:category/:article",
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
