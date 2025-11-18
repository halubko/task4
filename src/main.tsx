import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import GlobalStyles from "./assets/styles/GlobalStyles.tsx";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

const router = createRouter({ routeTree, context: { queryClient } });

declare module "@tanstack/react-router" {
   interface Register {
      router: typeof router;
   }
}

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <GlobalStyles />
         <RouterProvider router={router} />
      </QueryClientProvider>
   </StrictMode>
);
