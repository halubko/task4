import styled from "@emotion/styled";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 8px;
   border-bottom: ${({ theme }) => theme.borders.base};
`;

const OnlineIndicator = styled.div<{ isOnline: boolean }>`
   border-radius: 50%;
   background-color: ${({ isOnline }) => (isOnline ? "#2eff36" : "red")};
   width: 10px;
   height: 10px;
`;

interface PostHeaderProps {
   userId: number;
   src?: string;
   profileName: string;
}

const ChatHeader = ({ userId, src, profileName }: PostHeaderProps) => {
   return (
      <Wrapper>
         <ProfileAvatarLink userId={userId} src={src} profileName={profileName} />
         <OnlineIndicator isOnline={true} />
      </Wrapper>
   );
};

export default ChatHeader;
