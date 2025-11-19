import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import GlobalStyles from "./assets/styles/GlobalStyles.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/styles/theme.ts";

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
      },
   },
});

export const router = createRouter({ routeTree, context: { queryClient } });

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
         </ThemeProvider>
      </QueryClientProvider>
   </StrictMode>
);
