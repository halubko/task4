import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { PostHeaderWrapper } from "@/modules/posts/components/styles/ui/PostHeader/PostHeader.styles.ts";

interface PostHeaderProps {
   userId: number;
   src?: string;
   profileName: string;
}

const PostHeader = ({ userId, src, profileName }: PostHeaderProps) => {
   return (
      <PostHeaderWrapper>
         <ProfileAvatarLink userId={userId} src={src} profileName={profileName} />
      </PostHeaderWrapper>
   );
};

export default PostHeader;
