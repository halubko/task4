import { observer } from "mobx-react-lite";
import Message from "@/modules/chat/components/ui/ChatMain/Message.tsx";
import styled from "@emotion/styled";
import useGetMessages from "@/modules/chat/hooks/useGetMessages.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { authStore } from "@/modules/auth";
import { useEffect } from "react";
import socketStore from "@/modules/chat/store/socket.store.ts";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   flex: 1;
   overflow-y: auto;
`;

const ChatMain = observer(({ profileId }: { profileId: number }) => {
   const { data: messagesFromServer, isLoading } = useGetMessages(profileId);

   const { id: userId } = authStore;
   const { messages } = socketStore;

   useEffect(() => {
      messagesFromServer?.forEach((message) => {
         socketStore.addMessage(message);
      });
   }, [messagesFromServer]);

   if (isLoading) {
      return <LoadingIndicator />;
   }

   return (
      <Wrapper>
         {messages && messages.map((msg) => <Message message={msg} key={msg.id} userId={userId} />)}
      </Wrapper>
   );
});

export default ChatMain;
