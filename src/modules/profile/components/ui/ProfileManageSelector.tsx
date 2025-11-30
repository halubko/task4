import { useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "lucide-react";
import { authStore } from "@/modules/auth";
import { useNavigate } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { useQueryClient } from "@tanstack/react-query";
import ProfileStore from "@/modules/profile/store/profile.store.ts";

const Wrapper = styled.div`
   position: relative;
`;

const Button = styled.button`
   background-color: ${({ theme }) => theme.colors.background.primary_button};
   padding: 8px;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 8px;
   transition: background-color 0.2s;
   font-weight: 600;
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary_button_hover};
   }
`;

const Dropdown = styled.div<{ $isOpen: boolean }>`
   position: absolute;
   top: calc(100% + 10px);
   right: 0;
   width: 160px;
   background-color: ${({ theme }) => theme.colors.background.content};
   border-radius: 8px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   border: ${({ theme }) => theme.borders.base};
   overflow: hidden;
   z-index: 2;

   opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
   transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
   pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

   transition:
      opacity 0.3s ease,
      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const MenuItem = styled.button<{ variant?: "delete" }>`
   width: 100%;
   padding: 12px 16px;
   background: transparent;
   cursor: pointer;
   font-weight: 600;
   color: ${({ variant, theme }) => (variant === "delete" ? "#e02424" : theme.colors.text.primary)};
   transition: background-color 0.2s;
   border-bottom: ${({ theme }) => theme.borders.base};
   border-style: none;

   &:last-child {
      border-bottom: none;
   }

   &:hover {
      background-color: #333;
   }
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
      ProfileStore.setConfirmeModalOpen(true);
      setIsOpen(false);
   };

   return (
      <Wrapper>
         <Button onClick={toggleMenu}>
            Manage
            <Arrow isOpen={isOpen} />
         </Button>

         <Dropdown $isOpen={isOpen}>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            <MenuItem variant="delete" onClick={handleDeleteUser}>
               Delete account
            </MenuItem>
         </Dropdown>
      </Wrapper>
   );
});

export default ProfileManageSelector;
