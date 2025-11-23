import styled from "@emotion/styled";
import PostReactions from "@/modules/posts/components/ui/molecules/PostReactions.tsx";
import PostViews from "@/modules/posts/components/ui/atoms/PostViews.tsx";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 8px;
`;

interface PostFooterProps {
   reactions: {
      likes: number;
   };
   views: number;
   commentsCount: number;
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
      <Wrapper>
         <PostReactions
            likes={reactions.likes}
            commentsCount={commentsCount}
            postId={postId}
            onCommentClick={onCommentClick}
         />
         <PostViews views={views} />
      </Wrapper>
   );
};

export default PostFooter;
