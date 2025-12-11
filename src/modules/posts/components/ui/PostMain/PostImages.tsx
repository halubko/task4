import PostChangePhotoButtons from "@/modules/posts/components/ui/PostMain/PostChangePhotoButtons.tsx";
import PostUIStore from "@/modules/posts/store/post.store.ts";
import { observer } from "mobx-react-lite";
import {
   ImageCounter,
   Img,
   PostImagesWrapper,
} from "@/modules/posts/components/styles/ui/PostMain/PostImages.styles.ts";

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
      <PostImagesWrapper>
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
      </PostImagesWrapper>
   );
});

export default PostImages;
