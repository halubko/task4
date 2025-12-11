import Navbar from "./Navbar.tsx";
import { TvMinimalPlay } from "lucide-react";
import {
   LogoWrapper,
   MainContent,
   MainHeaderTitle,
   MainHeaderWrapper,
} from "@/shared/styles/MainHeader.styles.ts";

const MainHeader = () => {
   return (
      <MainHeaderWrapper>
         <MainContent>
            <LogoWrapper to="/posts">
               <TvMinimalPlay size={38} />
               <MainHeaderTitle>ErrorTube</MainHeaderTitle>
            </LogoWrapper>
            <Navbar />
         </MainContent>
      </MainHeaderWrapper>
   );
};

export default MainHeader;
