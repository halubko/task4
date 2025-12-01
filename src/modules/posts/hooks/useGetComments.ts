import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/modules/posts/api/postsAPI.ts";

const useGetComments = (postId: number) => {
   return useQuery({
      queryKey: ["get", "post", "comments", postId],
      queryFn: () => getComments(postId),
   });
};

export default useGetComments;
