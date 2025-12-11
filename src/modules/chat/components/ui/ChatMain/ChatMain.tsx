import { observer } from "mobx-react-lite";
import Message from "@/modules/chat/components/ui/ChatMain/Message.tsx";
import useGetMessages from "@/modules/chat/hooks/useGetMessages.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { authStore } from "@/modules/auth";
import { useEffect } from "react";
import socketStore from "@/modules/chat/store/socket.store.ts";
import { mockMessages } from "@/modules/chat/data/mockMessages.ts";
import { ChatMainWrapper } from "@/modules/chat/components/styles/ui/ChatMain/ChatMain.styles.ts";

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
      <ChatMainWrapper>
         {messages && messages.map((msg) => <Message message={msg} key={msg.id} userId={userId} />)}
      </ChatMainWrapper>
   );
});

export default ChatMain;
