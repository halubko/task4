import styled from "@emotion/styled";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 8px;
`;

interface PostHeaderProps {
   userId: number;
   src?: string;
   profileName: string;
}

const PostHeader = ({ userId, src, profileName }: PostHeaderProps) => {
   return (
      <Wrapper>
         <ProfileAvatarLink userId={userId} src={src} profileName={profileName} />
      </Wrapper>
   );
};

export default PostHeader;
