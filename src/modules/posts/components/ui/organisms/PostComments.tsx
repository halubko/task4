import type { PostCommentInterface } from "@/modules/posts/types/Comment.Interfaces.ts";
import PostComment from "@/modules/posts/components/ui/molecules/PostComment.tsx";
import styled from "@emotion/styled";
import AddComment from "@/modules/posts/components/ui/molecules/AddCommentForm.tsx";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 8px;
`;

interface PostCommentsProps {
   comments: PostCommentInterface[];
}

const PostComments = ({ comments }: PostCommentsProps) => {
   return (
      <Wrapper>
         {comments.map((comment, index) => (
            <>
               <PostComment comment={comment} key={comment.id} />
               {comments.length > 1 && index !== comments.length - 1 && (
                  <hr style={{ margin: "8px 0", opacity: 0.5 }} />
               )}
            </>
         ))}
         <hr style={{ margin: "8px 0", opacity: 0.5 }} />
         <AddComment postId={comments[0].postId} />
      </Wrapper>
   );
};

export default PostComments;
