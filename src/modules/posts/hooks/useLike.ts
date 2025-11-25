import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { setPostLike } from "@/modules/posts/api/postsAPI.ts";
import { toast } from "react-toastify";
import { setCommentLike } from "@/modules/posts/api/commentsAPI.ts";

interface useLikeProps {
   likes: number;
   id: number;
}

const useLike = ({ likes, id }: useLikeProps) => {
   const [isLiked, setIsLiked] = useState<boolean>(false);
   const [likesCount, setLikesCount] = useState<number>(likes);

   const { mutate: postLikeMutate } = useMutation({
      mutationKey: ["set", "like", "post", id],
      mutationFn: setPostLike,
      onError: (error) => {
         setIsLiked((prev) => !prev);
         setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
         toast.error("Post like setting error: " + error.message);
      },
   });

   const { mutate: commentLikeMutate } = useMutation({
      mutationKey: ["set", "like", "comment", id],
      mutationFn: setCommentLike,
      onError: (error) => {
         setIsLiked((prev) => !prev);
         setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
         toast.error("PostComment like setting error: " + error.message);
      },
   });

   return { postLikeMutate, commentLikeMutate, likesCount, setLikesCount, setIsLiked, isLiked };
};

export default useLike;
