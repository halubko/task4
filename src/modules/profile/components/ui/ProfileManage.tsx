import { useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "lucide-react";

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

const Arrow = styled(ChevronDownIcon, {
   shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
   font-size: 0.8em;
   transition: transform 0.3s ease;
   transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
   position: absolute;
   top: calc(100% + 10px);
   right: 0;
   width: 160px;
   background-color: ${({ theme }) => theme.colors.background.content};
   border-radius: 8px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   border: ${({ theme }) => theme.borders.base};
   overflow: hidden;
   z-index: 100;

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

const ProfileManage = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);

   return (
      <Wrapper>
         <Button onClick={toggleMenu}>
            Manage
            <Arrow isOpen={isOpen} />
         </Button>

         <DropdownMenu $isOpen={isOpen}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem variant="delete">Delete account</MenuItem>
         </DropdownMenu>
      </Wrapper>
   );
};

export default ProfileManage;
