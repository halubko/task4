import styled from "@emotion/styled";
import ProfileManageSelector from "@/modules/profile/components/ui/ProfileManageSelector.tsx";
import { Route } from "@/routes/_main/profile/$profileId.ts";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";

const Wrapper = styled.h2`
   display: flex;
   font-weight: 700;
   padding: 0 8px;
   box-sizing: border-box;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

interface ProfileFullNameProps {
   firstName: string;
   lastName: string;
}

const ProfileFullName = observer(({ firstName, lastName }: ProfileFullNameProps) => {
   const { profileId } = Route.useParams();
   return (
      <Wrapper>
         {firstName + " " + lastName}
         {Number(profileId) === authStore.id && <ProfileManageSelector />}
      </Wrapper>
   );
});

export default ProfileFullName;
