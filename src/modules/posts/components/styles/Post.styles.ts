import styled from "@emotion/styled";

export const PostWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
`;
