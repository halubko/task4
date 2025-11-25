import useGetPosts from "@/modules/posts/hooks/useGetPosts.ts";
import Post from "@/modules/posts/components/Post.tsx";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { mokPosts } from "@/modules/posts/data/mokPosts.ts";
import PostModal from "@/modules/posts/components/PostModal.tsx";
import PostCreateButton from "@/modules/posts/components/ui/atoms/PostCreateButton.tsx";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

export const PostsList = () => {
   const { data, fetchNextPage } = useGetPosts();
   const { ref, inView } = useInView();

   useEffect(() => {
      if (inView) {
         fetchNextPage();
      }
   }, [fetchNextPage, inView]);

   return (
      <>
         <PostCreateButton />
         {data?.pages.map((page, i) => (
            <Wrapper key={i}>
               {mokPosts.map((post) => (
                  <Post key={post.id} {...post} />
               ))}
               {page.posts.map((post) => (
                  <Post key={post.id} {...post} />
               ))}
               <div ref={ref}></div>
            </Wrapper>
         ))}
         <PostModal />
      </>
   );
};
