import useDeleteUser from "@/modules/profile/hooks/useDeleteUser.ts";
import { authStore } from "@/modules/auth";
import ModalTemplate from "@/shared/ModalTemplate.tsx";
import ProfileStore from "@/modules/profile/store/profile.store.ts";
import { observer } from "mobx-react-lite";
import {
   ProfileConfirmModalButton,
   ProfileConfirmModalButtonsWrapper,
   ProfileConfirmModalTitle,
   ProfileConfirmModalWrapper,
} from "@/modules/profile/components/styles/ProfileConfirmModal.styles.ts";

export const ProfileConfirmModal = observer(() => {
   const { mutate } = useDeleteUser();

   if (!ProfileStore.isConfirmModalOpen) return null;

   return (
      <ModalTemplate>
         <ProfileConfirmModalWrapper>
            <ProfileConfirmModalTitle>
               Are you sure you want to delete your profile?
            </ProfileConfirmModalTitle>
            <ProfileConfirmModalButtonsWrapper>
               <ProfileConfirmModalButton onClick={() => ProfileStore.setConfirmModalOpen(false)}>
                  Close
               </ProfileConfirmModalButton>
               <ProfileConfirmModalButton variant="delete" onClick={() => mutate(authStore.id)}>
                  Delete
               </ProfileConfirmModalButton>
            </ProfileConfirmModalButtonsWrapper>
         </ProfileConfirmModalWrapper>
      </ModalTemplate>
   );
});
