import styled from "@emotion/styled";

export const PostChangePhotoButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 97%;
   position: absolute;
   top: 50%;
   right: 8px;
   z-index: 2;
`;

export const PostChangePhotoButton = styled.button`
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
