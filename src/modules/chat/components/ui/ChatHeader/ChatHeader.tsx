import styled from "@emotion/styled";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 8px;
   border-bottom: ${({ theme }) => theme.borders.base};
`;

const ReturnButton = styled(Link)`
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.primary};
   display: none;

   @media (max-width: 700px) {
      display: flex;
   }
`;

// const OnlineIndicator = styled.div<{ isOnline: boolean }>`
//    border-radius: 50%;
//    background-color: ${({ isOnline }) => (isOnline ? "#2eff36" : "red")};
//    width: 10px;
//    height: 10px;
// `;

interface PostHeaderProps {
   userId: number;
   src?: string;
   profileName: string;
}

const ChatHeader = ({ userId, src, profileName }: PostHeaderProps) => {
   return (
      <Wrapper>
         <ReturnButton to="/messages">
            <ChevronLeft />
         </ReturnButton>
         <ProfileAvatarLink userId={userId} src={src} profileName={profileName} />

         {/* I don't have backend that allow to set online status */}
         {/* <OnlineIndicator isOnline={true} /> */}
      </Wrapper>
   );
};

export default ChatHeader;
