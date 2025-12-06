import useGetPosts from "@/modules/posts/hooks/useGetPosts.ts";
import Post from "@/modules/posts/components/Post.tsx";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { Fragment, useEffect } from "react";
import { mokPosts } from "@/modules/posts/data/mokPosts.ts";
import PostModal from "@/modules/posts/components/PostModal.tsx";
import PostCreateButton from "@/modules/posts/components/ui/PostCreateButton.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { useLocation } from "@tanstack/react-router";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   max-width: 550px;
   margin: 0 auto;
   width: 100%;
   padding: 0 8px;
   box-sizing: border-box;
`;

export const PostsList = () => {
   const { data, fetchNextPage, isFetching } = useGetPosts();
   const { ref, inView } = useInView();
   const { pathname } = useLocation();

   useEffect(() => {
      if (inView) {
         fetchNextPage();
      }
   }, [fetchNextPage, inView]);

   return (
      <Wrapper>
         <PostCreateButton />
         {data?.pages.map((page, i) => (
            <Fragment key={i}>
               {/* Mok data added only for /posts. */}
               {pathname === "/posts" && mokPosts.map((post) => <Post key={post.id} {...post} />)}
               {page.posts.map((post) => (
                  <Post key={post.id} {...post} />
               ))}
               <div ref={ref}></div>
            </Fragment>
         ))}
         {isFetching && <LoadingIndicator />}
         <PostModal />
      </Wrapper>
   );
};
