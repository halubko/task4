import { useMutation } from "@tanstack/react-query";
import AuthStore from "@/modules/auth/store/auth.store.ts";
import { refreshToken } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { isAxiosError } from "axios";

export const useRefreshToken = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   return useMutation({
      mutationKey: ["refreshToken"],
      mutationFn: refreshToken,
      onSuccess: (data) => {
         AuthStore.setTokens(data);
      },
      onError: (error) => {
         if (
            isAxiosError(error) &&
            error.status === 403 &&
            pathname !== "/signup" &&
            pathname !== "/signin"
         ) {
            toast.error("Expired refresh token: please login again");
            navigate({ to: "/signin" });
         } else if (pathname !== "/signup" && pathname !== "/signin") {
            toast.error("Refresh token Error: " + error.message);
         }
      },
   });
};
