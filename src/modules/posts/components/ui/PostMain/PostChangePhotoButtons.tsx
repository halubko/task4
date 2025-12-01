import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 97%;
   position: absolute;
   top: 50%;
   right: 8px;
   z-index: 2;
`;

const Button = styled.button`
   border: none;
   border-radius: 50%;
   padding: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(34, 34, 34, 0.3);
   color: ${({ theme }) => theme.colors.text.secondary};
   cursor: pointer;
   transition: background-color 0.1s ease-in-out;
   &:hover {
      background-color: rgba(34, 34, 34, 0.8);
      transition: background-color 0.1s ease-in-out;
   }
`;

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
      <Wrapper>
         <Button type="button" onClick={handleBack}>
            <ChevronLeft />
         </Button>
         <Button type="button" onClick={handleNext}>
            <ChevronRight />
         </Button>
      </Wrapper>
   );
};

export default PostChangePhotoButtons;
