import styled from "@emotion/styled";
import { mokChatsList } from "@/modules/chat/data/mokChatsList.ts";
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
         {mokChatsList.map((chat) => (
            <ChatLink chatInfo={chat} key={chat.id} />
         ))}
      </Wrapper>
   );
};

export default ChatsList;
