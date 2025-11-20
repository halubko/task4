import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

const Button = styled.button`
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

interface FormButton {
   type?: "submit" | "reset" | "button";
   variant?: "primary" | "secondary";
}

const BaseButton = ({ children, type = "button", ...props }: PropsWithChildren<FormButton>) => {
   return (
      <Button type={type} {...props}>
         {children}
      </Button>
   );
};

export default BaseButton;
