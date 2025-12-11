import { Heart } from "lucide-react";
import useLike from "@/modules/posts/hooks/useLike.ts";
import { LikeButton } from "@/modules/posts/components/styles/ui/Likes.styles.ts";

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
      <LikeButton onClick={handleLike} type="button" typeLike={type}>
         <Heart fill={isLiked ? "red" : "transparent"} size={type === "comment" ? 18 : 24} />
         {likesCount}
      </LikeButton>
   );
};

export default Likes;
