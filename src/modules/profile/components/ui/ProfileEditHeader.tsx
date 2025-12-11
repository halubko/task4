import { ChevronLeft, UserPen } from "lucide-react";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";
import { useRouter } from "@tanstack/react-router";
import {
   CloseModalButton,
   ProfileEditHeaderWrapper,
} from "@/modules/profile/components/styles/ui/ProfileEditHeader.styles.ts";
import { FormTitle } from "@/shared/styles/FormElements/FormTitle.styles.ts";
import { ProfileAvatar } from "@/modules/profile/components/styles/ui/ProfileAvatar.styles.ts";

const ProfileEditHeader = observer(() => {
   const avatar = authStore.profilePictureUrl;
   const { history } = useRouter();

   return (
      <ProfileEditHeaderWrapper>
         <CloseModalButton onClick={() => history.back()}>
            <ChevronLeft />
         </CloseModalButton>
         <FormTitle>Edit Profile</FormTitle>
         {avatar ? <ProfileAvatar src={avatar} /> : <UserPen size={42} />}
      </ProfileEditHeaderWrapper>
   );
});

export default ProfileEditHeader;
