import { Outlet } from "@tanstack/react-router";
import Header from "../components/templates/Header.tsx";

const MainLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default MainLayout;
