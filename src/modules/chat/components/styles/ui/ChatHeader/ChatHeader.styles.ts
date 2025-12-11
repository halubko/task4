import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const ChatHeaderWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 8px;
   border-bottom: ${({ theme }) => theme.borders.base};
`;

export const ReturnButton = styled(Link)`
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.primary};
   display: none;

   @media (max-width: 700px) {
      display: flex;
   }
`;

// export const OnlineIndicator = styled.div<{ isOnline: boolean }>`
//    border-radius: 50%;
//    background-color: ${({ isOnline }) => (isOnline ? "#2eff36" : "red")};
//    width: 10px;
//    height: 10px;
// `;
