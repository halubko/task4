import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { PostVideoWrapper } from "@/modules/posts/components/styles/ui/PostMain/PostVideo.styles.ts";

interface PostVideoProps {
   videoId: string;
}

const PostVideo = ({ videoId }: PostVideoProps) => {
   return (
      <PostVideoWrapper>
         <LiteYouTubeEmbed id={videoId} title={videoId} />
      </PostVideoWrapper>
   );
};

export default PostVideo;
