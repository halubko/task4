import { createLink } from "@tanstack/react-router";
import { User } from "lucide-react";
import {
   ProfileAvatarImg,
   ProfileAvatarLinkWrapper,
} from "@/shared/styles/ProfileAvatarLink.styles.ts";
import postStore from "@/modules/posts/store/post.store.ts";

interface ProfileAvatarLinkProps {
   userId: number;
   src?: string;
   alt?: string;
   profileName?: string;
}

const Link = createLink(ProfileAvatarLinkWrapper);

const ProfileAvatarLink = ({ userId, src, alt, profileName }: ProfileAvatarLinkProps) => {
   return (
      <Link
         to={"/profile/$profileId"}
         params={{ profileId: `${userId}` }}
         onClick={() => postStore.closeAllModal()}
      >
         {src ? <ProfileAvatarImg src={src} alt={alt} /> : <User />}
         {profileName}
      </Link>
   );
};

export default ProfileAvatarLink;
