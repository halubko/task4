import styled from "@emotion/styled";
import type { LucideIcon } from "lucide-react";

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px;
   border-bottom: ${({ theme }) => theme.borders.base};
`;

interface ProfileInfoElementProps {
   Icon: LucideIcon;
   body: string;
}

const ProfileInfoElement = ({ Icon, body }: ProfileInfoElementProps) => {
   return (
      <Wrapper>
         <div style={{ display: "flex", alignItems: "center" }}>
            <Icon />:
         </div>
         {body}
      </Wrapper>
   );
};

export default ProfileInfoElement;
