import { createFileRoute } from "@tanstack/react-router";
import ProfileEditPage from "@/pages/ProfileEditPage.tsx";

export const Route = createFileRoute("/_main/profile/edit")({
   component: ProfileEditPage,
});
