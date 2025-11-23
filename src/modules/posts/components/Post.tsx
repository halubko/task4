import styled from "@emotion/styled";
import PostHeader from "@/modules/posts/components/ui/organisms/PostHeader.tsx";
import PostFooter from "@/modules/posts/components/ui/organisms/PostFooter.tsx";
import type { PostInterface } from "@/modules/posts/types/Post.Interfaces.ts";
import { useGetUser } from "@/modules/profile";
import PostMain from "@/modules/posts/components/ui/organisms/PostMain.tsx";
import useGetComments from "@/modules/posts/hooks/useGetComments.ts";
import { observer } from "mobx-react-lite";
import PostUIStore from "@/modules/posts/store/postUI.store.ts";

const Wrapper = styled.div`
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
`;

const Post = observer((postData: PostInterface) => {
   const { reactions, views, userId, id: postId, title, body, images, videoId } = postData;
   const { data: userData } = useGetUser(userId);
   const { data: commentsData } = useGetComments(postId);

   const handleOpenModal = () => {
      if (postData && userData && commentsData) {
         PostUIStore.openPostModal(postData, userData, commentsData);
      }
   };

   return (
      <>
         {userData && commentsData && (
            <Wrapper>
               <PostHeader
                  userId={userId}
                  src={userData.image}
                  profileName={userData.firstName + " " + userData.lastName}
               />
               <hr />
               <PostMain
                  title={title}
                  description={body}
                  images={images}
                  videoId={videoId}
                  postId={postId}
                  onMainClick={handleOpenModal}
               />
               <hr />
               <PostFooter
                  reactions={reactions}
                  views={views}
                  commentsCount={commentsData.total}
                  postId={postId}
                  onCommentClick={handleOpenModal}
               />
            </Wrapper>
         )}
      </>
   );
});

export default Post;
