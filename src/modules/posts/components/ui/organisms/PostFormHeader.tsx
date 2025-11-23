import { BadgePlus } from "lucide-react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
`;

export const PostFormHeader = () => {
   return (
      <Wrapper>
         <BadgePlus size={42} />
         <h1 style={{ fontSize: "24px" }}>Create Post</h1>
      </Wrapper>
   );
};
