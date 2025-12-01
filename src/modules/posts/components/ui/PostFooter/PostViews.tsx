import styled from "@emotion/styled";
import { Eye } from "lucide-react";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 2px;
   padding: 4px;
`;

const PostViews = ({ views }: { views: number }) => {
   return (
      <Wrapper>
         <Eye />
         {views}
      </Wrapper>
   );
};

export default PostViews;
