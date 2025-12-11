import { MessageCirclePlus } from "lucide-react";
import {
   DefaultChatMainWrapper,
   DefaultChatWrapper,
} from "@/modules/chat/components/styles/ui/DefaultChat.styles.ts";

const DefaultChat = () => {
   return (
      <DefaultChatMainWrapper>
         <DefaultChatWrapper>
            <MessageCirclePlus size={60} />
            No chat selected
         </DefaultChatWrapper>
      </DefaultChatMainWrapper>
   );
};

export default DefaultChat;
