import { Plus } from "lucide-react";
import PostUIStore from "@/modules/posts/store/post.store.ts";
import { observer } from "mobx-react-lite";
import { PostCreateButtonWrapper } from "@/modules/posts/components/styles/ui/PostCreateButton.styles.ts";

const PostCreateButton = observer(() => {
   return (
      <PostCreateButtonWrapper onClick={() => PostUIStore.setIsCreatePostOpen(true)}>
         <Plus />
         Create post
      </PostCreateButtonWrapper>
   );
});

export default PostCreateButton;
