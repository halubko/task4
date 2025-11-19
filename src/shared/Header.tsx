import styled from "@emotion/styled";
import Navbar from "../molecules/Navbar.tsx";
import { Link } from "@tanstack/react-router";
import { TvMinimalPlay } from "lucide-react";

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: ${(props) => props.theme.colors.content_bg};
   position: sticky;
   top: 0;
`;

const MainContent = styled.header`
   display: flex;
   max-width: 1067px;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   padding: 0.5rem;
   svg,
   h1,
   a {
   }
`;

const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
   gap: 1rem;
   color: ${(props) => props.theme.colors.text.primary};
   text-decoration: none;
   font-weight: 700;
`;

const H1 = styled.h1`
   font-size: 1.6rem;
`;

const Header = () => {
   return (
      <Wrapper>
         <MainContent>
            <LogoWrapper to="/posts">
               <TvMinimalPlay size={38} />
               <H1>ErrorTube</H1>
            </LogoWrapper>
            <Navbar />
         </MainContent>
      </Wrapper>
   );
};

export default Header;
