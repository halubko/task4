import useDeleteUser from "@/modules/profile/hooks/useDeleteUser.ts";
import { authStore } from "@/modules/auth";
import styled from "@emotion/styled";
import ModalTemplate from "@/shared/ModalTemplate.tsx";
import ProfileStore from "@/modules/profile/store/profile.store.ts";
import { observer } from "mobx-react-lite";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   padding: 20px;
   gap: 42px;
   justify-self: center;
`;

const Button = styled.button<{ variant?: "delete" }>`
   padding: 8px;
   background: transparent;
   cursor: pointer;
   font-size: 1.5rem;
   font-weight: 600;
   color: ${({ variant, theme }) => (variant === "delete" ? "#e02424" : theme.colors.text.primary)};
   transition: background-color 0.2s;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   &:hover {
      background-color: #333;
   }
`;

export const ProfileConfirmModal = observer(() => {
   const { mutate } = useDeleteUser();

   if (!ProfileStore.isConfirmModalOpen) return null;

   return (
      <ModalTemplate>
         <Wrapper>
            <h2 style={{ textAlign: "center", fontSize: "1.7rem" }}>
               Are you sure you want to delete your profile?
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               <Button onClick={() => ProfileStore.setConfirmModalOpen(false)}>Close</Button>
               <Button variant="delete" onClick={() => mutate(authStore.id)}>
                  Delete
               </Button>
            </div>
         </Wrapper>
      </ModalTemplate>
   );
});
