import styled from "@emotion/styled";

export const FormInputStyles = styled.input`
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 10px;
   font-size: 1rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background.input};
   color: ${({ theme }) => theme.colors.text.primary};
   &:focus {
      outline: none;
      border: ${({ theme }) => theme.borders.focus};
   }
`;
