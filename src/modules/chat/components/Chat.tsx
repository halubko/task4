import styled from "@emotion/styled";
import ChatHeader from "@/modules/chat/components/ui/ChatHeader/ChatHeader.tsx";
import { Route } from "@/routes/_main/messages/$userId.ts";
import { useGetProfile } from "@/modules/profile";
import ChatFooter from "@/modules/chat/components/ui/ChatFooter/ChatFooter.tsx";
import ChatMain from "@/modules/chat/components/ui/ChatMain/ChatMain.tsx";

const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   max-width: 550px;
   margin: 0 auto;
   height: 90vh;
   display: flex;
   flex-direction: column;
`;

export const Chat = () => {
   const { userId } = Route.useParams();
   const profileId = Number(userId);
   const { data } = useGetProfile(profileId);

   return (
      <>
         {data && (
            <Wrapper>
               <ChatHeader userId={profileId} profileName={data.firstName} />
               <ChatMain profileId={profileId} />
               <ChatFooter />
            </Wrapper>
         )}
      </>
   );
};
