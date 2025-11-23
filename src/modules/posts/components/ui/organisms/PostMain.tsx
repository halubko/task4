import styled from "@emotion/styled";
import PostDescription from "@/modules/posts/components/ui/molecules/PostDescription.tsx";
import PostImages from "@/modules/posts/components/ui/molecules/PostImages.tsx";
import PostVideo from "@/modules/posts/components/ui/molecules/PostVideo.tsx";
import { observer } from "mobx-react-lite";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

interface PostMainProps {
   title: string;
   description: string;
   images?: string[];
   videoId?: string;
   postId: number;
   onMainClick?: () => void;
}

const PostMain = observer(
   ({ title, description, images, videoId, onMainClick, postId }: PostMainProps) => {
      return (
         <Wrapper>
            {videoId && <PostVideo videoId={videoId} />}
            {images && <PostImages images={images} postId={postId} />}
            <div onClick={onMainClick}>
               <PostDescription title={title} description={description} />
            </div>
         </Wrapper>
      );
   }
);

export default PostMain;
