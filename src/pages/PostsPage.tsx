import { PostCreateModal, Posts } from "@/modules/posts";
import styled from "@emotion/styled";
import PostCreateButton from "@/modules/posts/components/ui/atoms/PostCreateButton.tsx";

const Wrapper = styled.main`
   max-width: 550px;
   margin: 0 auto;
   padding: 0 10px;
`;

const PostsPage = () => {
   return (
      <>
         <Wrapper>
            <PostCreateButton />
            <Posts />
         </Wrapper>
         <PostCreateModal />
      </>
   );
};

export default PostsPage;
