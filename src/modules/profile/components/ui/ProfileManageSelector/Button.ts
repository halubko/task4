import styled from "@emotion/styled";

export const Button = styled.button`
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
