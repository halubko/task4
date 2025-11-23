import ModalTemplate from "@/shared/templates/ModalTemplate.tsx";
import PostHeader from "@/modules/posts/components/ui/organisms/PostHeader.tsx";
import PostMain from "@/modules/posts/components/ui/organisms/PostMain.tsx";
import PostFooter from "@/modules/posts/components/ui/organisms/PostFooter.tsx";
import PostComments from "@/modules/posts/components/ui/organisms/PostComments.tsx";
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

               {commentsData.comments[0] && (
                  <>
                     <hr />
                     <PostComments comments={commentsData.comments} />
                  </>
               )}
            </Wrapper>
         )}
      </ModalTemplate>
   );
});

export default PostModal;
