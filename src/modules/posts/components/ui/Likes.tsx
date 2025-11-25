import { Heart } from "lucide-react";
import styled from "@emotion/styled";
import useLike from "@/modules/posts/hooks/useLike.ts";

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

interface LikeProps {
   likes: number;
   id: number;
   type: "post" | "comment";
}

const Likes = ({ likes, id, type }: LikeProps) => {
   const { commentLikeMutate, postLikeMutate, likesCount, setLikesCount, setIsLiked, isLiked } =
      useLike({ likes, id });

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
