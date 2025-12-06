import styled from "@emotion/styled";
import { House, LogIn, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { authStore } from "@/modules/auth";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";

const Nav = styled.nav`
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

const NavLink = styled(Link)`
   display: flex;
   align-items: center;
`;

const Navbar = observer(() => {
   const { isAuth } = authStore;

   return (
      <Nav>
         <NavLink to="/posts">
            <House />
         </NavLink>
         <NavLink to="/messages">
            <MessageCircle />
         </NavLink>
         {isAuth ? (
            <ProfileAvatarLink src={authStore.profilePictureUrl} userId={authStore.id} />
         ) : (
            <Link to="/signin">
               <LogIn />
            </Link>
         )}
      </Nav>
   );
});

export default Navbar;
