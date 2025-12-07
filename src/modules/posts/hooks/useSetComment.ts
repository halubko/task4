import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "@/modules/posts/api/commentsAPI.ts";
import { toast } from "react-toastify";
import type { UseFormReturn } from "react-hook-form";
import type { AddCommentType } from "@/modules/posts/utils/validation.ts";

interface useSetCommentProps {
   postId: number;
   methods: UseFormReturn<AddCommentType>;
}

const useSetComment = ({ postId, methods }: useSetCommentProps) => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationKey: ["add", "comment"],
      mutationFn: addComment,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["get", "post", "comments", postId] });
         methods.setValue("comment", "");
      },
      onError: (error) => {
         toast.error("Failed to add a comment: " + error.message);
      },
   });
};

export default useSetComment;
