import styled from "@emotion/styled";
import { ChevronLeft, UserPen } from "lucide-react";
import ProfileAvatar from "@/modules/profile/components/ui/ProfileAvatar.tsx";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";
import { Link } from "@tanstack/react-router";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
   position: relative;
   width: 100%;
`;

const CloseModalButton = styled(Link)`
   position: absolute;
   top: 0;
   left: 0;
   background-color: ${({ theme }) => theme.colors.background.secondary_button};
   color: ${({ theme }) => theme.colors.text.link};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5px;
   cursor: pointer;
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary_button_hover};
      border: ${({ theme }) => theme.borders.focus};
   }
`;

const ProfileEditHeader = observer(() => {
   const avatar = authStore.profilePictureUrl;

   return (
      <Wrapper>
         <CloseModalButton to={"/profile"}>
            <ChevronLeft />
         </CloseModalButton>
         <h1 style={{ fontSize: "24px" }}>Edit Profile</h1>
         <div>
            {avatar ? <ProfileAvatar src={authStore.profilePictureUrl} /> : <UserPen size={42} />}
         </div>
      </Wrapper>
   );
});

export default ProfileEditHeader;
