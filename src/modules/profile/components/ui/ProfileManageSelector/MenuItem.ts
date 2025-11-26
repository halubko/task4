import styled from "@emotion/styled";

export const MenuItem = styled.button<{ variant?: "delete" }>`
   width: 100%;
   padding: 12px 16px;
   background: transparent;
   cursor: pointer;
   font-weight: 600;
   color: ${({ variant, theme }) => (variant === "delete" ? "#e02424" : theme.colors.text.primary)};
   transition: background-color 0.2s;
   border-bottom: ${({ theme }) => theme.borders.base};
   border-style: none;

   &:last-child {
      border-bottom: none;
   }

   &:hover {
      background-color: #333;
   }
`;
