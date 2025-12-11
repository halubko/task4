import type { PostCommentInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import PostComment from "@/modules/posts/components/ui/PostComment/PostComment.tsx";
import AddComment from "@/modules/posts/components/ui/PostComment/AddCommentForm.tsx";
import { Fragment } from "react";
import {
   PostCommentsListHorizLine,
   PostCommentsListWrapper,
} from "@/modules/posts/components/styles/ui/PostComment/PostCommentsList.styles.ts";

interface PostCommentsProps {
   comments: PostCommentInterface[];
   postId: number;
}

const PostCommentsList = ({ comments, postId }: PostCommentsProps) => {
   return (
      <PostCommentsListWrapper>
         {comments.map((comment, index) => (
            <Fragment key={comment.id}>
               <PostComment comment={comment} />
               {comments.length > 1 && index !== comments.length - 1 && (
                  <PostCommentsListHorizLine />
               )}
            </Fragment>
         ))}
         <PostCommentsListHorizLine />
         <AddComment postId={postId} />
      </PostCommentsListWrapper>
   );
};

export default PostCommentsList;
