import ProfileManageSelector from "@/modules/profile/components/ui/ProfileManageSelector.tsx";
import { Route } from "@/routes/_main/profile/$profileId.ts";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";
import {
   ProfileChatLink,
   ProfileFullNameWrapper,
} from "@/modules/profile/components/styles/ui/ProfileFullName.styles.ts";

interface ProfileFullNameProps {
   firstName: string;
   lastName: string;
}

const ProfileFullName = observer(({ firstName, lastName }: ProfileFullNameProps) => {
   const { profileId } = Route.useParams();
   const id = Number(profileId);
   return (
      <ProfileFullNameWrapper>
         {firstName + " " + lastName}
         {id === authStore.id ? (
            <ProfileManageSelector />
         ) : (
            <ProfileChatLink to={`/messages/${id}`}>Go to chat</ProfileChatLink>
         )}
      </ProfileFullNameWrapper>
   );
});

export default ProfileFullName;
