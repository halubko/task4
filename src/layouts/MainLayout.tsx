import { Outlet } from "@tanstack/react-router";
import MainHeader from "@/shared/MainHeader.tsx";

const MainLayout = () => {
   return (
      <>
         <MainHeader />
         <Outlet />
      </>
   );
};

export default MainLayout;
