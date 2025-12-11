import ChatHeader from "@/modules/chat/components/ui/ChatHeader/ChatHeader.tsx";
import { useGetProfile } from "@/modules/profile";
import ChatFooter from "@/modules/chat/components/ui/ChatFooter/ChatFooter.tsx";
import ChatMain from "@/modules/chat/components/ui/ChatMain/ChatMain.tsx";
import { useParams } from "@tanstack/react-router";
import { ChatMainWrapper, ChatWrapper } from "@/modules/chat/components/styles/Chat.styles.ts";

export const Chat = () => {
   const { userId } = useParams({ strict: false });
   const profileId = Number(userId);
   const { data } = useGetProfile(profileId);

   return (
      <>
         {data && (
            <ChatMainWrapper>
               <ChatWrapper>
                  <ChatHeader userId={profileId} profileName={data.firstName} src={data.image} />
                  <ChatMain profileId={profileId} />
                  <ChatFooter />
               </ChatWrapper>
            </ChatMainWrapper>
         )}
      </>
   );
};
