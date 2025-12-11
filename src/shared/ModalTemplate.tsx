import type { PropsWithChildren } from "react";
import { postUIStore } from "@/modules/posts";
import { X } from "lucide-react";
import { profileStore } from "@/modules/profile";
import {
   CloseModalButton,
   ModalBackground,
   ModalContainer,
} from "@/shared/styles/ModalTemplate.styles.ts";

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
