import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/modules/posts/api/postsAPI.ts";

const useGetPosts = () => {
   return useInfiniteQuery({
      queryKey: ["get", "posts"],
      queryFn: getPosts,
      initialPageParam: 0,
      getNextPageParam: (pageParams) => pageParams.skip + 10,
   });
};

export default useGetPosts;
