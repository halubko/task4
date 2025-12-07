import { observer } from "mobx-react-lite";
import Message from "@/modules/chat/components/ui/ChatMain/Message.tsx";
import styled from "@emotion/styled";
import useGetMessages from "@/modules/chat/hooks/useGetMessages.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { authStore } from "@/modules/auth";
import { useEffect } from "react";
import socketStore from "@/modules/chat/store/socket.store.ts";
import { mockMessages } from "@/modules/chat/data/mockMessages.ts";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   flex: 1;
   overflow-y: auto;
`;

const ChatMain = observer(({ profileId }: { profileId: number }) => {
   // Loading messages from local web-server
   const { data: messagesFromServer, isLoading, isError } = useGetMessages(profileId);

   const { id: userId } = authStore;
   const { messages } = socketStore;

   useEffect(() => {
      if (messagesFromServer) {
         socketStore.loadMessages(messagesFromServer);
      }
      if (isError) {
         socketStore.loadMessages(mockMessages);
      }
   }, [messagesFromServer, isError]);

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
