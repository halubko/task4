import PostReactions from "@/modules/posts/components/ui/PostFooter/PostReactions.tsx";
import PostViews from "@/modules/posts/components/ui/PostFooter/PostViews.tsx";
import { PostFooterWrapper } from "@/modules/posts/components/styles/ui/PostFooter/PostFooter.styles.ts";

interface PostFooterProps {
   reactions: {
      likes: number;
   };
   views: number;
   commentsCount?: number;
   postId: number;
   onCommentClick?: () => void;
}

const PostFooter = ({
   reactions,
   views,
   commentsCount,
   postId,
   onCommentClick,
}: PostFooterProps) => {
   return (
      <PostFooterWrapper>
         <PostReactions
            likes={reactions.likes}
            commentsCount={commentsCount}
            postId={postId}
            onCommentClick={onCommentClick}
         />
         <PostViews views={views} />
      </PostFooterWrapper>
   );
};

export default PostFooter;
