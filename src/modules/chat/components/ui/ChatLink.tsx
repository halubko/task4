import styled from "@emotion/styled";
import type { ChatInterfaces } from "@/modules/chat/interfaces/Chat.Interfaces.ts";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { useGetProfile } from "@/modules/profile";
import { useNavigate, useParams } from "@tanstack/react-router";

const Wrapper = styled.div<{ isActive: boolean }>`
   display: flex;
   align-items: center;
   flex-direction: column;
   background: ${({ theme }) => theme.colors.background.content};
   width: 100%;
   gap: 4px;
   border-radius: 8px;
   color: ${({ theme }) => theme.colors.text.primary};
   text-decoration: none;
   padding: 8px;
   border: ${({ theme, isActive }) => (isActive ? theme.borders.focus : theme.borders.base)};
`;

const ElementWrapper = styled.div`
   display: flex;
   width: 100%;
`;

const MessagePreview = styled.div`
   width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 0.9em;
   opacity: 0.8;
`;

interface ChatLinkProps {
   chatInfo: ChatInterfaces;
}

const ChatLink = ({ chatInfo }: ChatLinkProps) => {
   const { recipientId, last_message, last_sender } = chatInfo;
   const { userId } = useParams({ strict: false });
   const { data } = useGetProfile(recipientId);
   const navigate = useNavigate();

   return (
      <Wrapper
         isActive={Number(userId) === recipientId}
         onClick={() => navigate({ to: `/messages/${recipientId}` })}
      >
         <ElementWrapper>
            <ProfileAvatarLink
               userId={recipientId}
               profileName={data?.firstName}
               src={data?.image}
            />
         </ElementWrapper>
         <MessagePreview>
            {last_sender}: {last_message}
         </MessagePreview>
      </Wrapper>
   );
};

export default ChatLink;
