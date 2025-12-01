import useDeleteUser from "@/modules/profile/hooks/useDeleteUser.ts";
import { authStore } from "@/modules/auth";
import styled from "@emotion/styled";
import BaseButton from "@/shared/Base/BaseButton.tsx";
import ModalTemplate from "@/shared/ModalTemplate.tsx";
import ProfileStore from "@/modules/profile/store/profile.store.ts";
import { observer } from "mobx-react-lite";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
`;

export const ProfileConfirmModal = observer(() => {
   const { mutate } = useDeleteUser();

   if (!ProfileStore.isConfirmModalOpen) return null;

   return (
      <ModalTemplate>
         <Wrapper>
            Are you sure you want to delete this profile?
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <BaseButton type="secondary" onClick={() => ProfileStore.setConfirmModalOpen(false)}>
                  Close
               </BaseButton>
               <BaseButton type="primary" onClick={() => mutate(authStore.id)}>
                  Delete
               </BaseButton>
            </div>
         </Wrapper>
      </ModalTemplate>
   );
});
