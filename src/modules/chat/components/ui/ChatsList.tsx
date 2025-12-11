import { mockChatsList } from "@/modules/chat/data/mockChatsList.ts";
import ChatLink from "@/modules/chat/components/ui/ChatLink.tsx";
import { ChatListWrapper } from "@/modules/chat/components/styles/ui/ChatList.styles.ts";

const ChatsList = () => {
   return (
      <ChatListWrapper>
         {mockChatsList.map((chat) => (
            <ChatLink chatInfo={chat} key={chat.id} />
         ))}
      </ChatListWrapper>
   );
};

export default ChatsList;
