import styled from "@emotion/styled";
import { House, LogIn, MessageCircle, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { authStore } from "@/modules/auth";
import ProfileAvatarLink from "@/shared/atoms/ProfileAvatarLink.tsx";

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

const Navbar = observer(() => {
   const { isAuth } = authStore;
   const profileImage = authStore.profilePictureUrl ? (
      <ProfileAvatarLink src={authStore.profilePictureUrl} path="/profile" />
   ) : (
      <Link to="/profile">
         <User />
      </Link>
   );

   return (
      <Nav>
         <Link to="/posts">
            <House />
         </Link>
         <Link to="/chats">
            <MessageCircle />
         </Link>
         {isAuth ? (
            /* Should be changed on user avatar */
            profileImage
         ) : (
            <Link to="/signin">
               <LogIn />
            </Link>
         )}
      </Nav>
   );
});

export default Navbar;
