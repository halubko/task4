import { Heart } from "lucide-react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { setPostLike } from "@/modules/posts/api/postsAPI.ts";
import { toast } from "react-toastify";
import { setCommentLike } from "@/modules/posts/api/commentsAPI.ts";

const Button = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2px;
   background: transparent;
   color: inherit;
   border: none;
   &:active {
      transform: scale(0.9);
      transition-duration: 0.1s;
   }
`;

interface PostLikeProps {
   likes: number;
   id: number;
   type: "post" | "comment";
}

const Likes = ({ likes, id, type }: PostLikeProps) => {
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
         toast.error("Comment like setting error: " + error.message);
      },
   });

   const handleLike = () => {
      setIsLiked((prev) => !prev);
      setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));

      if (type === "comment") {
         commentLikeMutate({
            commentId: id,
            likes: likesCount,
         });
      } else {
         postLikeMutate({
            postId: id,
            likes: likesCount,
         });
      }
   };

   return (
      <Button
         onClick={handleLike}
         type="button"
         style={type === "comment" ? { justifyContent: "start", width: "fit-content" } : undefined}
      >
         <Heart fill={isLiked ? "red" : "transparent"} size={type === "comment" ? 18 : 24} />
         {likesCount}
      </Button>
   );
};

export default Likes;
