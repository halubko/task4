import styled from "@emotion/styled";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Wrapper = styled.div`
   position: relative;
`;

interface PostVideoProps {
   videoId: string;
}

const PostVideo = ({ videoId }: PostVideoProps) => {
   return (
      <Wrapper>
         <LiteYouTubeEmbed id={videoId} title={videoId} />
      </Wrapper>
   );
};

export default PostVideo;
