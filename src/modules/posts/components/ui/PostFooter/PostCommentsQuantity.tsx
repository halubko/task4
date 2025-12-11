import { MessageSquare } from "lucide-react";
import { observer } from "mobx-react-lite";
import { PostCommentsQuantityWrapper } from "@/modules/posts/components/styles/ui/PostFooter/PostCommentsQuantity.styles.ts";

interface PostCommentsQuantityProps {
   commentsCount: number;
   onCommentClick?: () => void;
}

const PostCommentsQuantity = observer(
   ({ commentsCount, onCommentClick }: PostCommentsQuantityProps) => {
      return (
         <PostCommentsQuantityWrapper onClick={onCommentClick}>
            <MessageSquare />
            {commentsCount}
         </PostCommentsQuantityWrapper>
      );
   }
);

export default PostCommentsQuantity;
