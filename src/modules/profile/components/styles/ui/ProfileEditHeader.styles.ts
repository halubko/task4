import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const ProfileEditHeaderWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
   position: relative;
   width: 100%;
`;

export const CloseModalButton = styled(Link)`
   position: absolute;
   top: 0;
   left: 0;
   background-color: ${({ theme }) => theme.colors.background.secondary_button};
   color: ${({ theme }) => theme.colors.text.link};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5px;
   cursor: pointer;
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary_button_hover};
      border: ${({ theme }) => theme.borders.focus};
   }
`;
