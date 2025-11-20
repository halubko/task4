import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

const Img = styled.img`
   width: 28px;
   height: 28px;
   border-radius: 50%;
   border: 2px solid transparent;
   transition: all 0.2s ease-in-out;
   box-sizing: border-box;
   //padding: 5px;
`;

interface ProfileAvatarLinkProps {
   path: string;
   src: string;
   alt?: string;
}

const ProfileAvatarLink = ({ path, src, alt }: ProfileAvatarLinkProps) => {
   return (
      <Link to={path}>
         <Img src={src} alt={alt} />
      </Link>
   );
};

export default ProfileAvatarLink;
