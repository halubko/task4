import styled from "@emotion/styled";

export const ProfileConfirmModalWrapper = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   padding: 20px;
   gap: 42px;
   justify-self: center;
`;

export const ProfileConfirmModalButton = styled.button<{ variant?: "delete" }>`
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

export const ProfileConfirmModalTitle = styled.h2`
   text-align: center;
   font-size: 1.7rem;
`;

export const ProfileConfirmModalButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;
