import {
   createRootRouteWithContext,
   Outlet,
   useLocation,
   useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { authStore, useCheckToken, useRefreshToken } from "@/modules/auth";
import { useEffect } from "react";
import { StyledToastContainer } from "@/assets/styles/toast.ts";
import { useWebSocket } from "@/modules/chat";

export const Route = createRootRouteWithContext<{
   queryClient: QueryClient;
}>()({
   component: RootComponent,
});

function RootComponent() {
   const { data: user, error, refetch } = useCheckToken();
   const { mutate, isSuccess } = useRefreshToken();
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const { connect, disconnect } = useWebSocket();

   useEffect(() => {
      if (user) {
         authStore.setUser(user);
         if (pathname === "/signin" || pathname === "/signup") {
            navigate({ to: "/posts" });
         }
      } else {
         mutate();
         if (isSuccess) {
            refetch();
         }
      }
   }, [error, isSuccess, mutate, navigate, pathname, refetch, user]);

   useEffect(() => {
      if (user) {
         connect();
      }
      return () => disconnect();
   }, [connect, disconnect, user]);

   return (
      <>
         <Outlet />
         <StyledToastContainer />
         <ReactQueryDevtools buttonPosition="top-right" />
         <TanStackRouterDevtools position="bottom-right" />
      </>
   );
}
