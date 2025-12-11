import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";
import { formatDateUtils } from "@/modules/chat/utils/formatDate.utils.ts";
import {
   MessageContainer,
   MessageContent,
   MessageTime,
   MessageWrapper,
} from "@/modules/chat/components/styles/ui/ChatMain/Message.styles.ts";

interface MessageProps {
   message: MessageInterface;
   userId: number;
}

const Message = ({ message, userId }: MessageProps) => {
   const { senderId, content, createdAt } = message;

   return (
      <>
         {senderId && createdAt && (
            <MessageWrapper senderId={senderId} userId={userId}>
               <MessageContainer senderId={senderId} userId={userId}>
                  <MessageContent senderId={senderId} userId={userId}>
                     {content}
                  </MessageContent>
                  <MessageTime senderId={senderId} userId={userId}>
                     {formatDateUtils(createdAt)}
                  </MessageTime>
               </MessageContainer>
            </MessageWrapper>
         )}
      </>
   );
};

export default Message;
