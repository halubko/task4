import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";
import { User } from "lucide-react";

const Img = styled.img`
   width: 28px;
   height: 28px;
   border-radius: 50%;
   border: 2px solid transparent;
   transition: all 0.2s ease-in-out;
   box-sizing: border-box;
`;

const LinkWrapper = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.link};
   font-weight: 600;
`;

interface ProfileAvatarLinkProps {
   userId: number;
   src?: string;
   alt?: string;
   profileName?: string;
}

const ProfileAvatarLink = ({ userId, src, alt, profileName }: ProfileAvatarLinkProps) => {
   return (
      <LinkWrapper to={`/profile/${userId}`}>
         {src ? <Img src={src} alt={alt} /> : <User />}
         {profileName}
      </LinkWrapper>
   );
};

export default ProfileAvatarLink;
