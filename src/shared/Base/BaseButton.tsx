import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";

const Wrapper = styled.div<{ type: "primary" | "secondary" }>`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 8px;
   cursor: pointer;
   width: fit-content;
   border-radius: 8px;
   background-color: ${({ type, theme }) =>
      type === "primary"
         ? theme.colors.background.secondary_button
         : theme.colors.background.primary_button};

   color: ${({ type, theme }) =>
      type === "primary" ? theme.colors.text.link : theme.colors.text.primary};

   border: ${({ theme }) => theme.borders.base};
`;

interface BaseButton {
   type: "primary" | "secondary";
   onClick: () => void;
}

const BaseButton = ({ type, onClick, children, ...props }: PropsWithChildren<BaseButton>) => {
   return (
      <Wrapper onClick={onClick} type={type} {...props}>
         {children}
      </Wrapper>
   );
};

export default BaseButton;
