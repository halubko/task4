import { PostCreateModal, PostsList } from "@/modules/posts";

const PostsPage = () => {
   return (
      <>
         <PostsList />
         <PostCreateModal />
      </>
   );
};

export default PostsPage;
