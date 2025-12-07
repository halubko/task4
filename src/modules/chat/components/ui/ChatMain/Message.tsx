import styled from "@emotion/styled";
import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";
import { formatDate } from "@/modules/chat/utils/formatDate.ts";

interface StyledProps {
   senderId: number;
   userId: number;
}

const Wrapper = styled.div<StyledProps>`
   display: flex;
   padding: 8px;
   box-sizing: border-box;
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
`;

const MessageContainer = styled.div<StyledProps>`
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

const MessageContent = styled.div<StyledProps>`
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

const MessageTime = styled.div<StyledProps>`
   display: flex;
   width: 100%;
   background-color: transparent;
   font-size: 0.7rem;
   color: ${({ theme, senderId, userId }) =>
      senderId === userId ? theme.colors.background.content : theme.colors.text.primary};
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
`;

interface MessageProps {
   message: MessageInterface;
   userId: number;
}

const Message = ({ message, userId }: MessageProps) => {
   const { senderId, content, createdAt } = message;

   return (
      <Wrapper senderId={senderId} userId={userId}>
         <MessageContainer senderId={senderId} userId={userId}>
            <MessageContent senderId={senderId} userId={userId}>
               {content}
            </MessageContent>
            <MessageTime senderId={senderId} userId={userId}>
               {formatDate(createdAt)}
            </MessageTime>
         </MessageContainer>
      </Wrapper>
   );
};

export default Message;
