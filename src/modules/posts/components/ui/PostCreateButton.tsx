import styled from "@emotion/styled";
import { Plus } from "lucide-react";
import PostUIStore from "@/modules/posts/store/postUI.store.ts";
import { observer } from "mobx-react-lite";

const Wrapper = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background.content};
   color: ${({ theme }) => theme.colors.text.link};
   padding: 8px;
   font-weight: bold;
   cursor: pointer;
`;

const PostCreateButton = observer(() => {
   return (
      <Wrapper onClick={() => PostUIStore.setIsCreatePostOpen(true)}>
         <Plus />
         Create post
      </Wrapper>
   );
});

export default PostCreateButton;
