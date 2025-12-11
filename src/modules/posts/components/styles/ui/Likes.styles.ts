import styled from "@emotion/styled";

export const LikeButton = styled.button<{ typeLike: "comment" | "post" }>`
   display: flex;
   justify-content: ${({ typeLike }) => (typeLike === "comment" ? "start" : "center")};
   align-items: center;
   gap: 2px;
   background: transparent;
   color: inherit;
   border: none;
   width: ${({ typeLike }) => (typeLike === "comment" ? "fit-content" : null)};
   &:active {
      transform: scale(0.9);
      transition-duration: 0.1s;
   }
`;
