import { createFileRoute } from "@tanstack/react-router";
import SignUpPage from "@/pages/SignUpPage.tsx";

export const Route = createFileRoute("/signup")({
   component: SignUpPage,
});
