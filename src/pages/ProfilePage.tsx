import { PostsList } from "@/modules/posts";
import { ProfileCard } from "@/modules/profile";

const ProfilePage = () => {
   return (
      <>
         <ProfileCard />
         <PostsList />
      </>
   );
};

export default ProfilePage;
