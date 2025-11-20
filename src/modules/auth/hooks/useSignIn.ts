import { useMutation } from "@tanstack/react-query";
import AuthStore from "@/modules/auth/store/auth.store.ts";
import { loginUser } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";

const useSignIn = () => {
   return useMutation({
      mutationKey: ["signin"],
      mutationFn: loginUser,
      onSuccess: (data) => {
         AuthStore.setUser(data);
         AuthStore.setTokens(data);
      },
      onError: (error) => {
         toast(`SignIn Error: ${error.message}`);
      },
   });
};

export default useSignIn;
