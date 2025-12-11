import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/modules/profile/api/api.ts";
import { toast } from "react-toastify";
import { authStore } from "@/modules/auth";
import { useNavigate } from "@tanstack/react-router";
import { profileStore } from "@/modules/profile";

const useDeleteUser = () => {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   return useMutation({
      mutationKey: ["delete", "user"],
      mutationFn: deleteUser,
      onSuccess: () => {
         toast.success("Account deleted!");
         authStore.logout();
         profileStore.closeAllModals();
         queryClient.clear();
         navigate({ to: "/signin" });
      },
      onError: (error) => {
         toast.error("Error while deleting account: " + error.message);
      },
   });
};

export default useDeleteUser;
