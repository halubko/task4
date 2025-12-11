import styled from "@emotion/styled";

export const FormInputWithIconWrapper = styled.div`
   display: flex;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 10px;
   gap: 8px;
   background-color: ${({ theme }) => theme.colors.background.input};
   color: ${({ theme }) => theme.colors.text.primary};
   width: 100%;
   &:focus {
      outline: none;
      border: ${({ theme }) => theme.borders.focus};
   }
`;

export const FormWithIconInput = styled.input`
   background-color: transparent;
   border: none;
   color: ${({ theme }) => theme.colors.text.primary};
   font-size: 1rem;
   width: 100%;
   &:focus {
      outline: none;
   }
`;
