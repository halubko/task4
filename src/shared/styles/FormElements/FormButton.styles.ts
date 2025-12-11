import styled from "@emotion/styled";

export const FormButton = styled.button`
   width: 100%;
   text-align: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   padding: 10px;
   font-size: 1rem;
   cursor: pointer;
   background-color: ${({ theme }) => theme.colors.background.primary_button};
   transition: background-color 0.2s ease-in-out;
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary_button_hover};
      transition: background-color 0.2s ease-in-out;
   }
`;

export const InlineFormButton = styled(FormButton)`
   padding: 7px;
   display: flex;
   align-items: center;
`;
