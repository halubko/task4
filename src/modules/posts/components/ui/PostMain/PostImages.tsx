import styled from "@emotion/styled";
import PostChangePhotoButtons from "@/modules/posts/components/ui/PostMain/PostChangePhotoButtons.tsx";
import PostUIStore from "@/modules/posts/store/postUI.store.ts";
import { observer } from "mobx-react-lite";

const Wrapper = styled.div`
   position: relative;
   display: grid;
   grid-template-areas: "stack";
   width: 100%;
   overflow: hidden;
   align-items: center;
`;

const Img = styled.img<{ isVisible: boolean }>`
   object-fit: cover;
   width: 100%;
   grid-area: stack;
   opacity: ${(props) => (props.isVisible ? 1 : 0)};
   z-index: ${(props) => (props.isVisible ? 1 : 0)};
   pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

const ImageCounter = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2px;
   padding: 3px 10px;
   position: absolute;
   top: 1%;
   right: 1%;
   background-color: rgba(34, 34, 34, 0.3);
   border-radius: 8px;
   z-index: 2;
`;

interface PostImagesProps {
   images: string[];
   postId: number;
}

const PostImages = observer(({ images, postId }: PostImagesProps) => {
   const imagesCount = images.length;

   const currentImage = PostUIStore.postImageState[postId] || 0;

   const handleSetCurrentImage = (index: number) => {
      PostUIStore.setCurrentImageIndex(postId, index);
   };

   return (
      <Wrapper>
         {imagesCount > 1 && (
            <ImageCounter>
               <div>{currentImage + 1}</div>
               <div>/</div>
               <div>{imagesCount}</div>
            </ImageCounter>
         )}
         {images.map((src, index) => (
            <Img key={src} src={src} isVisible={index === currentImage} />
         ))}
         {imagesCount > 1 && (
            <PostChangePhotoButtons
               imagesCount={imagesCount}
               currentImage={currentImage}
               setCurrentImage={handleSetCurrentImage}
            />
         )}
      </Wrapper>
   );
});

export default PostImages;
