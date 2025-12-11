import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { ChevronLeft } from "lucide-react";
import {
   ChatHeaderWrapper,
   ReturnButton,
} from "@/modules/chat/components/styles/ui/ChatHeader/ChatHeader.styles.ts";

interface PostHeaderProps {
   userId: number;
   src?: string;
   profileName: string;
}

const ChatHeader = ({ userId, src, profileName }: PostHeaderProps) => {
   return (
      <ChatHeaderWrapper>
         <ReturnButton to="/messages">
            <ChevronLeft />
         </ReturnButton>
         <ProfileAvatarLink userId={userId} src={src} profileName={profileName} />

         {/* I don't have backend that allow to set online status */}
         {/* <OnlineIndicator isOnline={true} /> */}
      </ChatHeaderWrapper>
   );
};

export default ChatHeader;
