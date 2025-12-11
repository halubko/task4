import type { PostCommentInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import Likes from "@/modules/posts/components/ui/Likes.tsx";
import {
   LikesWrapper,
   PostCommentDescription,
   PostCommentWrapper,
   UserNameLink,
} from "@/modules/posts/components/styles/ui/PostComment/ProfileComment.styles.ts";

interface PostCommentProps {
   comment: PostCommentInterface;
}

const PostComment = ({ comment }: PostCommentProps) => {
   return (
      <PostCommentWrapper>
         <UserNameLink to={`/profile/${comment.user.id}`}>{comment.user.fullName}</UserNameLink>
         <PostCommentDescription>{comment.body}</PostCommentDescription>
         <LikesWrapper>
            <Likes likes={comment.likes} id={comment.id} type="comment" />
         </LikesWrapper>
      </PostCommentWrapper>
   );
};

export default PostComment;
