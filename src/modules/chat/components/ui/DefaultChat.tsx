import { Wrapper as MainWrapper } from "@/modules/chat/components/Chat.tsx";
import { MessageCirclePlus } from "lucide-react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 15px;
   font-weight: bold;
   font-size: 1rem;
`;

const DefaultChat = () => {
   return (
      <MainWrapper style={{ width: "100%", justifyContent: "center" }}>
         <Wrapper>
            <MessageCirclePlus size={60} />
            No chat selected
         </Wrapper>
      </MainWrapper>
   );
};

export default DefaultChat;
