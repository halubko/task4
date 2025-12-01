import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/modules/posts/api/postsAPI.ts";
import { toast } from "react-toastify";

const useCreatePost = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationKey: ["create", "post"],
      mutationFn: createPost,
      onSuccess: () => {
         toast.success("Post successfully created!");
         queryClient.invalidateQueries({ queryKey: ["get", "posts"] });
      },
      onError: (error) => {
         toast.error("Error creating post" + error.message);
      },
   });
};

export default useCreatePost;
