import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts, getPostsByUserId } from "@/modules/posts/api/postsAPI.ts";
import { useParams } from "@tanstack/react-router";

const useGetPosts = () => {
   const { profileId } = useParams({ strict: false });

   const allPosts = useInfiniteQuery({
      queryKey: ["get", "posts", "all"],
      queryFn: getPosts,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParams) => {
         if (!lastPage || lastPage.posts.length === 0) {
            return undefined;
         }
         return lastPageParams + 10;
      },
      enabled: !profileId,
   });

   const userPosts = useInfiniteQuery({
      queryKey: ["get", "posts", "user", profileId],
      queryFn: ({ pageParam }) => getPostsByUserId(pageParam, Number(profileId)),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _allPages, lastPageParams) => {
         if (!lastPage || lastPage.posts.length === 0) {
            return undefined;
         }
         return lastPageParams + 10;
      },
      enabled: !!profileId,
   });

   return profileId ? userPosts : allPosts;
};

export default useGetPosts;
