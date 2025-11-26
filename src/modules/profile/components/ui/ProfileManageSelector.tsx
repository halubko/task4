import { useState } from "react";
import styled from "@emotion/styled";
import { ChevronDownIcon } from "lucide-react";
import { Dropdown } from "@/modules/profile/components/ui/ProfileManageSelector/Dropdown.ts";
import { MenuItem } from "@/modules/profile/components/ui/ProfileManageSelector/MenuItem.ts";
import { Button } from "@/modules/profile/components/ui/ProfileManageSelector/Button.ts";

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

const ProfileManage = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);

   return (
      <Wrapper>
         <Button onClick={toggleMenu}>
            Manage
            <Arrow isOpen={isOpen} />
         </Button>

         <Dropdown $isOpen={isOpen}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem variant="delete">Delete account</MenuItem>
         </Dropdown>
      </Wrapper>
   );
};

export default ProfileManage;
