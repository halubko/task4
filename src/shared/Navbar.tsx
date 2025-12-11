import { House, LogIn, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { authStore } from "@/modules/auth";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { Nav, NavLink } from "@/shared/styles/Navbar.styles.ts";

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
            <ProfileAvatarLink
               src={authStore.profilePictureUrl}
               userId={authStore.id}
               alt="My Profile"
            />
         ) : (
            <Link to="/signin">
               <LogIn />
            </Link>
         )}
      </Nav>
   );
});

export default Navbar;
