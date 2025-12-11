import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const ProfileFullNameWrapper = styled.h2`
   display: flex;
   font-weight: 700;
   padding: 0 8px;
   box-sizing: border-box;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

export const ProfileChatLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   text-decoration: none;
   font-size: 1rem;
   padding: 8px;
   color: ${({ theme }) => theme.colors.text.primary};
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary_button_hover};
   }
`;
