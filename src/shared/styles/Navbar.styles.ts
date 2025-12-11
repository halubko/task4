import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   min-width: 120px;
   svg {
      stroke: ${({ theme }) => theme.colors.text.link};
   }
   & > .active {
      > img {
         border: 2px solid ${({ theme }) => theme.colors.text.link_selected};
         padding: 5px;
         transition: all 0.2s ease-in-out;
      }
      > svg {
         stroke: ${({ theme }) => theme.colors.text.link_selected};
      }
   }
`;

export const NavLink = styled(Link)`
   display: flex;
   align-items: center;
`;
