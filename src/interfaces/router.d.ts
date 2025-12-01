import "@tanstack/react-router";
import { router as r } from "../main.tsx";

declare module "@tanstack/react-router" {
   interface Register {
      router: typeof r;
   }
}
