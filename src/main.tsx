import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({ routeTree });

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   </StrictMode>
);
