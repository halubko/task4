import { useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "lucide-react";
import { Dropdown } from "@/modules/profile/components/ui/ProfileManageSelector/Dropdown.ts";
import { MenuItem } from "@/modules/profile/components/ui/ProfileManageSelector/MenuItem.ts";
import { Button } from "@/modules/profile/components/ui/ProfileManageSelector/Button.ts";
import { authStore } from "@/modules/auth";
import { useNavigate } from "@tanstack/react-router";
import useDeleteUser from "@/modules/profile/hooks/useDeleteUser.ts";
import { observer } from "mobx-react-lite";
import { useQueryClient } from "@tanstack/react-query";

const Wrapper = styled.div`
   position: relative;
`;

const Arrow = styled(ChevronDownIcon, {
   shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
   font-size: 0.8em;
   transition: transform 0.3s ease;
   transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const ProfileManageSelector = observer(() => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const { mutate } = useDeleteUser(authStore.id);
   const queryClient = useQueryClient();

   const toggleMenu = () => setIsOpen(!isOpen);

   const handleLogOut = () => {
      authStore.logout();
      queryClient.clear();
      navigate({ to: "/signin" });
   };

   return (
      <Wrapper>
         <Button onClick={toggleMenu}>
            Manage
            <Arrow isOpen={isOpen} />
         </Button>

         <Dropdown $isOpen={isOpen}>
            <MenuItem>Edit</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            <MenuItem variant="delete" onClick={() => mutate}>
               Delete account
            </MenuItem>
         </Dropdown>
      </Wrapper>
   );
});

export default ProfileManageSelector;
