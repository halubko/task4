import PostDescription from "@/modules/posts/components/ui/PostMain/PostDescription.tsx";
import PostImages from "@/modules/posts/components/ui/PostMain/PostImages.tsx";
import PostVideo from "@/modules/posts/components/ui/PostMain/PostVideo.tsx";
import { observer } from "mobx-react-lite";
import { PostMainWrapper } from "@/modules/posts/components/styles/ui/PostMain/PostMain.styles.ts";

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
         <PostMainWrapper>
            {videoId && <PostVideo videoId={videoId} />}
            {images && <PostImages images={images} postId={postId} />}
            <div onClick={onMainClick}>
               <PostDescription title={title} description={description} />
            </div>
         </PostMainWrapper>
      );
   }
);

export default PostMain;
