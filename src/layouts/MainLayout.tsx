import { Outlet } from "@tanstack/react-router";
import Header from "@/shared/Header.tsx";

const MainLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default MainLayout;
