import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const PostCommentWrapper = styled.section`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const UserNameLink = styled(Link)`
   font-size: 1rem;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.link};
   font-weight: 600;
   width: fit-content;
`;

export const PostCommentDescription = styled.article`
   font-size: 0.9rem;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const LikesWrapper = styled.div`
   display: flex;
   justify-content: end;
`;
