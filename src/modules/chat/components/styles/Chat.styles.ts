import styled from "@emotion/styled";

export const ChatWrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   height: 100%;
`;

export const ChatMainWrapper = styled.div`
   width: 100%;
`;
