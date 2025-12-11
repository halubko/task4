import styled from "@emotion/styled";

interface StyledProps {
   senderId: number;
   userId: number;
}

export const MessageWrapper = styled.div<StyledProps>`
   display: flex;
   padding: 8px;
   box-sizing: border-box;
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
`;

export const MessageContainer = styled.div<StyledProps>`
   display: flex;
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
   flex-direction: column;
   padding: 6px;
   align-items: center;
   background-color: ${({ theme, senderId, userId }) =>
      senderId === userId
         ? theme.colors.background.primary_button
         : theme.colors.background.secondary_button};
   color: ${({ theme, senderId, userId }) =>
      senderId === userId ? theme.colors.background.content : theme.colors.text.primary};
   border-radius: 8px;
   border: ${({ senderId, theme, userId }) =>
      senderId === userId ? "2px solid transparent" : theme.borders.base};
`;

export const MessageContent = styled.div<StyledProps>`
   display: flex;
   flex-direction: column;
   width: 100%;
   background-color: ${({ theme, senderId, userId }) =>
      senderId === userId
         ? theme.colors.background.primary_button
         : theme.colors.background.secondary_button};
   color: ${({ theme, senderId, userId }) =>
      senderId === userId ? theme.colors.background.content : theme.colors.text.primary};
   border-radius: 8px;
   word-break: break-word;
   overflow-wrap: break-word;
`;

export const MessageTime = styled.div<StyledProps>`
   display: flex;
   width: 100%;
   background-color: transparent;
   font-size: 0.7rem;
   color: ${({ theme, senderId, userId }) =>
      senderId === userId ? theme.colors.background.content : theme.colors.text.primary};
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
`;
