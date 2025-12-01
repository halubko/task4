import { createFileRoute } from "@tanstack/react-router";
import PostsPage from "@/pages/PostsPage.tsx";

export const Route = createFileRoute("/_main/posts")({
   component: PostsPage,
});
