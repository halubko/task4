import type { PostCommentInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import PostComment from "@/modules/posts/components/ui/PostComment/PostComment.tsx";
import styled from "@emotion/styled";
import AddComment from "@/modules/posts/components/ui/PostComment/AddCommentForm.tsx";
import { Fragment } from "react";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 8px;
`;

interface PostCommentsProps {
   comments: PostCommentInterface[];
   postId: number;
}

const PostCommentsList = ({ comments, postId }: PostCommentsProps) => {
   return (
      <Wrapper>
         {comments.map((comment, index) => (
            <Fragment key={comment.id}>
               <PostComment comment={comment} />
               {comments.length > 1 && index !== comments.length - 1 && (
                  <hr style={{ margin: "8px 0", opacity: 0.5 }} />
               )}
            </Fragment>
         ))}
         {comments.length > 1 && <hr style={{ margin: "8px 0", opacity: 0.5 }} />}
         {comments.length <= 1 && <hr style={{ margin: "4px 0", visibility: "hidden" }} />}
         <AddComment postId={postId} />
      </Wrapper>
   );
};

export default PostCommentsList;
