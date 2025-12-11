import useGetPosts from "@/modules/posts/hooks/useGetPosts.ts";
import Post from "@/modules/posts/components/Post.tsx";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { mockPosts } from "@/modules/posts/data/mockPosts.ts";
import PostModal from "@/modules/posts/components/PostModal.tsx";
import PostCreateButton from "@/modules/posts/components/ui/PostCreateButton.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { useLocation, useParams } from "@tanstack/react-router";
import { authStore } from "@/modules/auth";
import { observer } from "mobx-react-lite";
import { Observer, Wrapper } from "@/modules/posts/components/styles/PostsList.styles.ts";

export const PostsList = observer(() => {
   const { data, fetchNextPage, isFetching } = useGetPosts();
   const { ref, inView } = useInView();
   const { pathname } = useLocation();
   const { profileId } = useParams({ strict: false });

   useEffect(() => {
      if (inView) {
         fetchNextPage();
      }
   }, [fetchNextPage, inView]);

   return (
      <Wrapper>
         {(Number(profileId) === authStore.id || pathname === "/posts") && <PostCreateButton />}
         {data?.pages.map((page, i) => (
            <Fragment key={i}>
               {/* Mok data added only for /posts. */}
               {pathname === "/posts" && mockPosts.map((post) => <Post key={post.id} {...post} />)}
               {page.posts.map((post) => (
                  <Post key={post.id} {...post} />
               ))}
               <Observer ref={ref} />
            </Fragment>
         ))}
         {isFetching && <LoadingIndicator />}
         <PostModal />
      </Wrapper>
   );
});
