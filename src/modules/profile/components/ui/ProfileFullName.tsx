import styled from "@emotion/styled";
import ProfileManage from "@/modules/profile/components/ui/ProfileManage.tsx";

const Wrapper = styled.h2`
   display: flex;
   font-weight: 700;
   padding-left: 8px;
   justify-content: space-between;
   width: 100%;
`;

interface ProfileFullNameProps {
   firstName: string;
   lastName: string;
}

const ProfileFullName = ({ firstName, lastName }: ProfileFullNameProps) => {
   return (
      <Wrapper>
         {firstName + " " + lastName}
         <ProfileManage />
      </Wrapper>
   );
};

export default ProfileFullName;
