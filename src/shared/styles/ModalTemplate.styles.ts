import styled from "@emotion/styled";

export const ModalBackground = styled.div`
   position: fixed;
   inset: 0;
   background-color: rgba(20, 20, 20, 0.7);
   z-index: 3;
   display: flex;
   overflow-y: auto;
`;

export const ModalContainer = styled.div`
   max-width: 550px;
   width: 100%;
   position: relative;
   padding: 0 10px;
   margin: auto;
`;

export const CloseModalButton = styled.button`
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

   @media (max-width: 650px) {
      right: 16px;
      top: 4px;
   }
`;
