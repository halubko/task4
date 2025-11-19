import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout.tsx";

export const Route = createFileRoute("/_main")({
   component: MainLayout,
});
