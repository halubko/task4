import PostHeader from "@/modules/posts/components/ui/PostHeader/PostHeader.tsx";
import PostFooter from "@/modules/posts/components/ui/PostFooter/PostFooter.tsx";
import type { PostInterface } from "@/modules/posts/interfaces/Post.Interfaces.ts";
import { useGetProfile } from "@/modules/profile";
import PostMain from "@/modules/posts/components/ui/PostMain/PostMain.tsx";
import useGetComments from "@/modules/posts/hooks/useGetComments.ts";
import { observer } from "mobx-react-lite";
import PostUIStore from "@/modules/posts/store/post.store.ts";
import { PostWrapper } from "@/modules/posts/components/styles/Post.styles.ts";

const Post = observer((postData: PostInterface) => {
   const { reactions, views, userId, id: postId, title, body, images, videoId } = postData;
   const { data: userData } = useGetProfile(userId);
   const { data: commentsData } = useGetComments(postId);

   const handleOpenModal = () => {
      if (postData && userData && commentsData) {
         PostUIStore.openPostModal(postData, userData, commentsData);
      }
   };

   return (
      <>
         {userData && commentsData && (
            <PostWrapper>
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
            </PostWrapper>
         )}
      </>
   );
});

export default Post;
