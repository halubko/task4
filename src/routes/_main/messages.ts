import { createFileRoute } from "@tanstack/react-router";
import ChatsListPage from "@/pages/ChatsListPage.tsx";

export const Route = createFileRoute("/_main/messages")({
   component: ChatsListPage,
});
