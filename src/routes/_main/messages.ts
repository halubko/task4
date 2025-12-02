import { createFileRoute } from "@tanstack/react-router";
import ChatsPage from "@/pages/ChatsPage.tsx";

export const Route = createFileRoute("/_main/messages")({
   component: ChatsPage,
});
