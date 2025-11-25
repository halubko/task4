import { PostCreateModal, PostsList } from "@/modules/posts";
import styled from "@emotion/styled";

const Wrapper = styled.main`
   max-width: 550px;
   margin: 0 auto;
   padding: 0 10px;
`;

const PostsPage = () => {
   return (
      <>
         <Wrapper>
            <PostsList />
         </Wrapper>
         <PostCreateModal />
      </>
   );
};

export default PostsPage;
