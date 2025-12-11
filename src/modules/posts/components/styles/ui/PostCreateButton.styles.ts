import styled from "@emotion/styled";

export const PostCreateButtonWrapper = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background.content};
   color: ${({ theme }) => theme.colors.text.link};
   padding: 8px;
   font-weight: bold;
   cursor: pointer;
`;
