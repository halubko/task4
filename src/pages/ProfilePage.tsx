import { PostCreateModal, PostsList } from "@/modules/posts";
import { ProfileCard, ProfileConfirmModal } from "@/modules/profile";

const ProfilePage = () => {
   return (
      <>
         <ProfileCard />
         <PostsList />
         <ProfileConfirmModal />
         <PostCreateModal />
      </>
   );
};

export default ProfilePage;
