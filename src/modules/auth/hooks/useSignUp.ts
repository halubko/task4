import { useMutation } from "@tanstack/react-query";
import AuthStore from "@/modules/auth/store/auth.store.ts";
import { addUser } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";

const useSignUp = () => {
   return useMutation({
      mutationKey: ["signup"],
      mutationFn: addUser,
      onSuccess: (data) => {
         AuthStore.setUser(data);
      },
      onError: (error) => {
         toast(`SignUp Error: ${error.message}`);
      },
   });
};

export default useSignUp;
