import styled from "@emotion/styled";
import { House, LogIn, MessageCircle, User } from "lucide-react";
import { Link } from "@tanstack/react-router";

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

export default function Navbar() {
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
            <Link to="/user">
               {/* Should be changed on user avatar */}
               <User />
            </Link>
         ) : (
            <Link to="/login">
               <LogIn />
            </Link>
         )}
      </Nav>
   );
}
