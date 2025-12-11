import type { ChatInterfaces } from "@/modules/chat/interfaces/Chat.Interfaces.ts";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { useGetProfile } from "@/modules/profile";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
   ChatLinkWrapper,
   ElementWrapper,
   MessagePreview,
} from "@/modules/chat/components/styles/ui/ChatLink.styles.ts";

interface ChatLinkProps {
   chatInfo: ChatInterfaces;
}

const ChatLink = ({ chatInfo }: ChatLinkProps) => {
   const { recipientId, last_message, last_sender } = chatInfo;
   const { userId } = useParams({ strict: false });
   const { data } = useGetProfile(recipientId);
   const navigate = useNavigate();

   return (
      <ChatLinkWrapper
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
      </ChatLinkWrapper>
   );
};

export default ChatLink;
