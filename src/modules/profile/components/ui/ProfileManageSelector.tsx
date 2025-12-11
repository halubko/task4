import { useState } from "react";
import { authStore } from "@/modules/auth";
import { useNavigate } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { useQueryClient } from "@tanstack/react-query";
import ProfileStore from "@/modules/profile/store/profile.store.ts";
import {
   Arrow,
   Dropdown,
   MenuItem,
   ProfileManageSelectorButton,
   ProfileManageSelectorWrapper,
} from "@/modules/profile/components/styles/ui/ProfileManageSelector.styles.ts";

const ProfileManageSelector = observer(() => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const toggleMenu = () => setIsOpen(!isOpen);

   const handleEdit = () => {
      navigate({ to: "/profile/edit" });
   };

   const handleLogOut = () => {
      authStore.logout();
      queryClient.clear();
      navigate({ to: "/signin" });
   };

   const handleDeleteUser = () => {
      ProfileStore.setConfirmModalOpen(true);
      setIsOpen(false);
   };

   return (
      <ProfileManageSelectorWrapper>
         <ProfileManageSelectorButton onClick={toggleMenu}>
            Manage
            <Arrow isOpen={isOpen} />
         </ProfileManageSelectorButton>

         <Dropdown $isOpen={isOpen}>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            <MenuItem variant="delete" onClick={handleDeleteUser}>
               Delete account
            </MenuItem>
         </Dropdown>
      </ProfileManageSelectorWrapper>
   );
});

export default ProfileManageSelector;
