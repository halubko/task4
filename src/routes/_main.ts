import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/Main.Layout.tsx";

export const Route = createFileRoute("/_main")({
   component: MainLayout,
});
