import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
   build: {
      sourcemap: true,
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
      },
   },
   plugins: [
      tanstackRouter({
         target: "react",
         autoCodeSplitting: true,
      }),
      react({
         jsxImportSource: "@emotion/react",
         babel: {
            plugins: [["babel-plugin-react-compiler"], ["@emotion/babel-plugin"]],
         },
      }),
   ],
});
