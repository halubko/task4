import { ChevronLeft, ChevronRight } from "lucide-react";
import {
   PostChangePhotoButton,
   PostChangePhotoButtonsWrapper,
} from "@/modules/posts/components/styles/ui/PostMain/PostChangePhotoButtons.styles.ts";

interface PostControlPhotoButtonsProps {
   currentImage: number;
   setCurrentImage: (index: number) => void;
   imagesCount: number;
}

const PostChangePhotoButtons = ({
   currentImage,
   setCurrentImage,
   imagesCount,
}: PostControlPhotoButtonsProps) => {
   const handleBack = () => {
      if (currentImage !== 0) {
         setCurrentImage(currentImage - 1);
      }
   };

   const handleNext = () => {
      if (imagesCount > currentImage + 1) {
         setCurrentImage(currentImage + 1);
      }
   };

   return (
      <PostChangePhotoButtonsWrapper>
         <PostChangePhotoButton type="button" onClick={handleBack} aria-label="Previos image">
            <ChevronLeft />
         </PostChangePhotoButton>
         <PostChangePhotoButton type="button" onClick={handleNext} aria-label="Next image">
            <ChevronRight />
         </PostChangePhotoButton>
      </PostChangePhotoButtonsWrapper>
   );
};

export default PostChangePhotoButtons;
