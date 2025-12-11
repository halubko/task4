import styled from "@emotion/styled";
import { InlineFormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";

export const PostCreateModalLinkWrapper = styled.div`
   display: flex;
   width: 100%;
   gap: 1rem;
`;

export const LinkToggleButton = styled(InlineFormButton)<{ isVideo: boolean }>`
   background-color: ${({ isVideo }) => (isVideo ? "#f00" : null)};
   color: ${({ isVideo }) => (isVideo ? "#fff" : null)};
   &:hover {
      background-color: ${({ isVideo }) => (isVideo ? "#ff5e5e" : null)};
   }
`;
