import { Outlet } from "@tanstack/react-router";
import MainHeader from "@/shared/organisms/MainHeader.tsx";

const MainLayout = () => {
   return (
      <>
         <MainHeader />
         <Outlet />
      </>
   );
};

export default MainLayout;
