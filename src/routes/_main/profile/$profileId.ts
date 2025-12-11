import { createFileRoute } from "@tanstack/react-router";
import ProfilePage from "@/pages/ProfilePage.tsx";

export const Route = createFileRoute("/_main/profile/$profileId")({
   component: ProfilePage,
});
