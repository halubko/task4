import { TvMinimalPlay } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { AuthHeaderWrapper } from "@/modules/auth/components/styles/ui/AuthHeader.styles.ts";
import { FormTitle } from "@/shared/styles/FormElements/FormTitle.styles.ts";

export const AuthHeader = () => {
   const location = useLocation();

   return (
      <AuthHeaderWrapper>
         <TvMinimalPlay size={42} />
         <FormTitle>
            {location.pathname === "/signin" ? "Sign in" : "Sign up"} to ErrorTube
         </FormTitle>
      </AuthHeaderWrapper>
   );
};
