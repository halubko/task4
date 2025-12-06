import styled from "@emotion/styled";
import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";

const Wrapper = styled.div<{ senderId: number; userId: number }>`
   display: flex;
   padding: 8px;
   box-sizing: border-box;
   justify-content: ${({ senderId, userId }) => (senderId === userId ? `flex-end` : `flex-start`)};
`;

const MessageContainer = styled.div<{ senderId: number; userId: number }>`
   display: flex;
   justify-content: center;
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

interface MessageProps {
   message: MessageInterface;
   userId: number;
}

const Message = ({ message, userId }: MessageProps) => {
   const { senderId, content } = message;
   return (
      <Wrapper senderId={senderId} userId={userId}>
         <MessageContainer senderId={senderId} userId={userId}>
            {content}
         </MessageContainer>
      </Wrapper>
   );
};

export default Message;
