import { useMutation } from "@tanstack/react-query";
import AuthStore from "@/modules/auth/store/auth.store.ts";
import { loginUser } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

const useSignIn = () => {
   const navigate = useNavigate();

   return useMutation({
      mutationKey: ["signin"],
      mutationFn: loginUser,
      onSuccess: (data) => {
         AuthStore.setUser(data);
         AuthStore.setTokens(data);
         navigate({ to: "/posts" });
      },
      onError: (error) => {
         toast(`SignIn Error: ${error.message}`);
      },
   });
};

export default useSignIn;
