import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/modules/profile/api/api.ts";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import type {
   ProfileInterfaces,
   ProfileUpdateInterface,
} from "@/modules/profile/interfaces/Profile.Interfaces.ts";

const useUpdateUser = (userId: number) => {
   const navigate = useNavigate();
   const { invalidateQueries } = useQueryClient();

   return useMutation<ProfileInterfaces, Error, ProfileUpdateInterface>({
      mutationKey: ["update", "user"],
      mutationFn: (formData) => updateUser(userId, formData),
      onSuccess: () => {
         toast.success("Profile updated successfully.");
         invalidateQueries({ queryKey: ["get", "user", userId] });
         navigate({ to: `/profile/${userId}` });
      },
      onError: (error) => {
         toast.error("Error updating profile: " + error.message);
      },
   });
};

export default useUpdateUser;
