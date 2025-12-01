import { useMutation } from "@tanstack/react-query";
import { addUser } from "@/modules/auth/api/api.ts";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

const useSignUp = () => {
   const navigate = useNavigate();

   return useMutation({
      mutationKey: ["signup"],
      mutationFn: addUser,
      onSuccess: () => {
         toast.success("Signup successfully created!");
         navigate({ to: "/signin" });
      },
      onError: (error) => {
         toast(`Signup Error: ${error.message}`);
      },
   });
};

export default useSignUp;
