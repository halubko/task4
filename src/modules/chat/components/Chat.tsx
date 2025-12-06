import styled from "@emotion/styled";
import ChatHeader from "@/modules/chat/components/ui/ChatHeader/ChatHeader.tsx";
import { useGetProfile } from "@/modules/profile";
import ChatFooter from "@/modules/chat/components/ui/ChatFooter/ChatFooter.tsx";
import ChatMain from "@/modules/chat/components/ui/ChatMain/ChatMain.tsx";
import { useParams } from "@tanstack/react-router";

export const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   height: 100%;
`;

export const Chat = () => {
   const { userId } = useParams({ strict: false });
   const profileId = Number(userId);
   const { data } = useGetProfile(profileId);

   return (
      <>
         {data && (
            <div style={{ width: "100%" }}>
               <Wrapper>
                  <ChatHeader userId={profileId} profileName={data.firstName} />
                  <ChatMain profileId={profileId} />
                  <ChatFooter />
               </Wrapper>
            </div>
         )}
      </>
   );
};
