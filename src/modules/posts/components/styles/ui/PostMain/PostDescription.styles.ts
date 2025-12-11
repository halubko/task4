import styled from "@emotion/styled";

export const PostDescriptionWrapper = styled.section`
   display: flex;
   flex-direction: column;
   padding: 8px;
   gap: 8px;
`;

export const PostDescriptionTitle = styled.h2`
   font-size: 1rem;
`;

export const DescriptionShort = styled.article`
   font-size: 0.9rem;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`;

export const DescriptionFull = styled.article`
   font-size: 0.9rem;
`;
