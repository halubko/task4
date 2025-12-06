import styled from "@emotion/styled";
import ProfileManageSelector from "@/modules/profile/components/ui/ProfileManageSelector.tsx";
import { Route } from "@/routes/_main/profile/$profileId.ts";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";
import { Link } from "@tanstack/react-router";

const Wrapper = styled.h2`
   display: flex;
   font-weight: 700;
   padding: 0 8px;
   box-sizing: border-box;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

const ProfileChatLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   text-decoration: none;
   font-size: 1rem;
   padding: 8px;
   color: ${({ theme }) => theme.colors.text.primary};
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary_button_hover};
   }
`;

interface ProfileFullNameProps {
   firstName: string;
   lastName: string;
}

const ProfileFullName = observer(({ firstName, lastName }: ProfileFullNameProps) => {
   const { profileId } = Route.useParams();
   const id = Number(profileId);
   return (
      <Wrapper>
         {firstName + " " + lastName}
         {id === authStore.id ? (
            <ProfileManageSelector />
         ) : (
            <ProfileChatLink to={`/messages/${id}`}>Go to chat</ProfileChatLink>
         )}
      </Wrapper>
   );
});

export default ProfileFullName;
