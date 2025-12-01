import ModalTemplate from "@/shared/ModalTemplate.tsx";
import PostHeader from "@/modules/posts/components/ui/PostHeader/PostHeader.tsx";
import PostMain from "@/modules/posts/components/ui/PostMain/PostMain.tsx";
import PostFooter from "@/modules/posts/components/ui/PostFooter/PostFooter.tsx";
import PostCommentsList from "@/modules/posts/components/ui/PostComment/PostCommentsList.tsx";
import PostUIStore from "@/modules/posts/store/postUI.store.ts";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
`;

const PostModal = observer(() => {
   const post = PostUIStore.selectedPost;
   const userData = PostUIStore.selectedUser;
   const commentsData = PostUIStore.selectedComments;

   if (!post) return null;

   return (
      <ModalTemplate>
         {userData && commentsData && (
            <Wrapper>
               <PostHeader
                  userId={userData.id}
                  src={userData.image}
                  profileName={userData.firstName + " " + userData.lastName}
               />
               <hr />
               <PostMain
                  title={post.title}
                  description={post.body}
                  images={post.images}
                  videoId={post.videoId}
                  postId={post.id}
               />
               <hr />
               <PostFooter
                  reactions={post.reactions}
                  views={post.views}
                  commentsCount={commentsData.total}
                  postId={post.id}
               />

               <hr />
               <PostCommentsList comments={commentsData.comments} postId={post.id} />
            </Wrapper>
         )}
      </ModalTemplate>
   );
});

export default PostModal;
