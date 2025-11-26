import styled from "@emotion/styled";

export const Dropdown = styled.div<{ $isOpen: boolean }>`
   position: absolute;
   top: calc(100% + 10px);
   right: 0;
   width: 160px;
   background-color: ${({ theme }) => theme.colors.background.content};
   border-radius: 8px;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   border: ${({ theme }) => theme.borders.base};
   overflow: hidden;
   z-index: 100;

   opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
   transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
   pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

   transition:
      opacity 0.3s ease,
      transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;
