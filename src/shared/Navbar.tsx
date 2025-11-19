import styled from "@emotion/styled";
import { House, LogIn, MessageCircle, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";

const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   svg {
      stroke: ${(props) => props.theme.colors.text.link};
   }
   & > .active > svg {
      stroke: ${(props) => props.theme.colors.text.link_selected};
   }
`;

const Navbar = observer(() => {
   const isAuth = false;

   return (
      <Nav>
         <Link to="/posts">
            <House />
         </Link>
         <Link to="/chats">
            <MessageCircle />
         </Link>
         {isAuth ? (
            <Link to="/profile">
               {/* Should be changed on user avatar */}
               <User />
            </Link>
         ) : (
            <Link to="/signin">
               <LogIn />
            </Link>
         )}
      </Nav>
   );
});

export default Navbar;
