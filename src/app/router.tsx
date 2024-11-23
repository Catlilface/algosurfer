import { createHashRouter, Outlet, RouteObject } from "react-router-dom";
import { Layout } from "@/app/dashboard";
import { NotFound } from "@/pages";

export const routes = [
    {
        path: ":category/:article",
        element: <Outlet />,
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
