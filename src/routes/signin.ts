import { createFileRoute } from "@tanstack/react-router";
import SignInPage from "@/pages/SignInPage.tsx";

export const Route = createFileRoute("/signin")({
   component: SignInPage,
});
