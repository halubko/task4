import styled from "@emotion/styled";
import { mockChatsList } from "@/modules/chat/data/mockChatsList.ts";
import ChatLink from "@/modules/chat/components/ui/ChatLink.tsx";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 0 8px;
   gap: 16px;
   flex-direction: column;
`;

const ChatsList = () => {
   return (
      <Wrapper>
         {mockChatsList.map((chat) => (
            <ChatLink chatInfo={chat} key={chat.id} />
         ))}
      </Wrapper>
   );
};

export default ChatsList;
