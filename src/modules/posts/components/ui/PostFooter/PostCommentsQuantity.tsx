import { MessageSquare } from "lucide-react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

const Wrapper = styled.div`
   display: flex;
   gap: 2px;
   cursor: pointer;
   align-items: center;
`;

interface PostCommentsQuantityProps {
   commentsCount: number;
   onCommentClick?: () => void;
}

const PostCommentsQuantity = observer(
   ({ commentsCount, onCommentClick }: PostCommentsQuantityProps) => {
      return (
         <Wrapper onClick={onCommentClick}>
            <MessageSquare />
            {commentsCount}
         </Wrapper>
      );
   }
);

export default PostCommentsQuantity;
