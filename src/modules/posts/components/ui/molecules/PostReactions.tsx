import styled from "@emotion/styled";
import Likes from "@/modules/posts/components/ui/atoms/Likes.tsx";
import PostCommentsQuantity from "@/modules/posts/components/ui/atoms/PostCommentsQuantity.tsx";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 8px;
`;

interface PostReactionsProps {
   likes: number;
   commentsCount: number;
   postId: number;
   onCommentClick?: () => void;
}

const PostReactions = ({ likes, commentsCount, postId, onCommentClick }: PostReactionsProps) => {
   return (
      <Wrapper>
         <Likes likes={likes} id={postId} type="post" />
         <PostCommentsQuantity commentsCount={commentsCount} onCommentClick={onCommentClick} />
      </Wrapper>
   );
};

export default PostReactions;
