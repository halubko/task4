import { useMutation } from "@tanstack/react-query";
import AuthStore from "@/modules/auth/store/auth.store.ts";
import { refreshToken } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";
import { isAxiosError } from "axios";

export const useRefreshToken = () => {
   const navigate = useNavigate();

   return useMutation({
      mutationKey: ["refreshToken"],
      mutationFn: refreshToken,
      onSuccess: (data) => {
         AuthStore.setTokens(data);
      },
      onError: (error) => {
         if (isAxiosError(error) && error.status === 403) {
            toast.error("Expired refresh token: please login again");
            navigate({ to: "/signin" });
         } else {
            toast.error("Refresh token Error: " + error.message);
         }
      },
   });
};
