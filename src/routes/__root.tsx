import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { authStore, useCheckToken, useRefreshToken } from "@/modules/auth";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export const Route = createRootRouteWithContext<{
   queryClient: QueryClient;
}>()({
   component: RootComponent,
});

function RootComponent() {
   const { data: user, error, refetch } = useCheckToken();
   const { mutate, isSuccess } = useRefreshToken();

   useEffect(() => {
      if (user) {
         authStore.setUser(user);
      }
      if (isAxiosError(error) && error.status === 401) {
         mutate();
         if (isSuccess) {
            refetch();
         }
      }
   }, [error, isSuccess, mutate, refetch, user]);

   return (
      <>
         <Outlet />
         <ToastContainer />
         <ReactQueryDevtools buttonPosition="top-right" />
         <TanStackRouterDevtools position="bottom-right" />
      </>
   );
}
