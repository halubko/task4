import styled from "@emotion/styled";

export const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
`;
