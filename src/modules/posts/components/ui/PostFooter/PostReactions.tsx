import Likes from "@/modules/posts/components/ui/Likes.tsx";
import PostCommentsQuantity from "@/modules/posts/components/ui/PostFooter/PostCommentsQuantity.tsx";
import { PostReactionsWrapper } from "@/modules/posts/components/styles/ui/PostFooter/PostReactions.styles.ts";

interface PostReactionsProps {
   likes: number;
   commentsCount?: number;
   postId: number;
   onCommentClick?: () => void;
}

const PostReactions = ({ likes, commentsCount, postId, onCommentClick }: PostReactionsProps) => {
   return (
      <PostReactionsWrapper>
         <Likes likes={likes} id={postId} type="post" />
         <PostCommentsQuantity commentsCount={commentsCount} onCommentClick={onCommentClick} />
      </PostReactionsWrapper>
   );
};

export default PostReactions;
