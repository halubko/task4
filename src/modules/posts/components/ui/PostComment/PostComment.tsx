import type { PostCommentInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import styled from "@emotion/styled";
import Likes from "@/modules/posts/components/ui/Likes.tsx";
import { Link } from "@tanstack/react-router";

const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

const UserNameLink = styled(Link)`
   font-size: 1rem;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.link};
   font-weight: 600;
   width: fit-content;
`;

const Description = styled.article`
   font-size: 0.9rem;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`;

interface PostCommentProps {
   comment: PostCommentInterface;
}

const PostComment = ({ comment }: PostCommentProps) => {
   return (
      <Wrapper>
         <UserNameLink to={`/profile/${comment.user.id}`}>{comment.user.fullName}</UserNameLink>
         <Description>{comment.body}</Description>
         <div style={{ display: "flex", justifyContent: "end" }}>
            <Likes likes={comment.likes} id={comment.id} type="comment" />
         </div>
      </Wrapper>
   );
};

export default PostComment;
