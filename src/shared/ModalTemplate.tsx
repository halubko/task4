import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
import { postUIStore } from "@/modules/posts";
import { X } from "lucide-react";
import { profileStore } from "@/modules/profile";

const ModalBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   background-color: rgba(20, 20, 20, 0.7);
   width: 100%;
   min-height: 100vh;
   z-index: 2;
   display: flex;
   align-items: center;
`;

const ModalContainer = styled.div`
   max-width: 550px;
   margin: 0 auto;
   position: relative;
   width: 100%;
   padding: 0 10px;
`;

const CloseModalButton = styled.button`
   position: absolute;
   top: 0;
   right: -40px;
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

const ModalTemplate = ({ children }: PropsWithChildren) => {
   const handleClose = () => {
      postUIStore.closeAllModal();
      profileStore.closeAllModals();
   };

   return (
      <ModalBackground onClick={handleClose}>
         <ModalContainer onClick={(e) => e.stopPropagation()}>
            {children}
            <CloseModalButton onClick={handleClose}>
               <X />
            </CloseModalButton>
         </ModalContainer>
      </ModalBackground>
   );
};

export default ModalTemplate;
