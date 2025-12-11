import styled from "@emotion/styled";

export const PostImagesWrapper = styled.div`
   position: relative;
   display: grid;
   grid-template-areas: "stack";
   width: 100%;
   overflow: hidden;
   align-items: center;
`;

export const Img = styled.img<{ isVisible: boolean }>`
   object-fit: cover;
   width: 100%;
   grid-area: stack;
   opacity: ${(props) => (props.isVisible ? 1 : 0)};
   z-index: ${(props) => (props.isVisible ? 1 : 0)};
   pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
`;

export const ImageCounter = styled.div`
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
