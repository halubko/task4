import styled from "@emotion/styled";
import ChatsList from "@/modules/chat/components/ui/ChatsList.tsx";
import { Outlet, useLocation } from "@tanstack/react-router";
import DefaultChat from "@/modules/chat/components/ui/DefaultChat.tsx";

const Wrapper = styled.div`
   display: flex;
   margin: 0 auto;
   max-width: 1067px;
   padding: 0 8px;
   gap: 16px;
   height: 90vh;
   @media (max-width: 380px) {
      height: 87vh;
   }
`;

const ChatsMediaWrapper = styled.div<{ isVisible: boolean }>`
   @media (max-width: 700px) {
      width: 100%;
      ${({ isVisible }) => isVisible && "display: none;"}
   }
`;

const OutletMediaWrapper = styled.div<{ isVisible: boolean }>`
   width: 100%;
   display: flex;

   @media (max-width: 700px) {
      ${({ isVisible }) => (isVisible ? null : "display: none;")}
   }
`;

export const ChatLayout = () => {
   const { pathname } = useLocation();

   const isOpenedChat = pathname !== "/messages";

   return (
      <Wrapper>
         <ChatsMediaWrapper isVisible={isOpenedChat}>
            <ChatsList />
         </ChatsMediaWrapper>
         <OutletMediaWrapper isVisible={isOpenedChat}>
            {isOpenedChat ? <Outlet /> : <DefaultChat />}
         </OutletMediaWrapper>
      </Wrapper>
   );
};
