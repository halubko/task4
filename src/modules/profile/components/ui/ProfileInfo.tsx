import styled from "@emotion/styled";
import type { ProfileInfoInterface } from "@/modules/profile/interfaces/ProfileInfo.Interface.ts";
import ProfileInfoElement from "@/modules/profile/components/ui/ProfileInfoElement.tsx";
import {
   AtSignIcon,
   BriefcaseBusinessIcon,
   Cake,
   GraduationCapIcon,
   HouseIcon,
   MailIcon,
} from "lucide-react";
import { getBirthDateWithAge, getLocation } from "@/modules/profile/utils/userInfoConverters.ts";
import ProfileFullName from "@/modules/profile/components/ui/ProfileFullName.tsx";

const MainWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   @media (max-width: 468px) {
      align-items: center;
   }
`;

const ProfileInfoElementWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 8px;
   & > div {
      border-bottom: ${({ theme }) => theme.borders.base};
   }
   @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 740px) {
      grid-template-columns: 1fr;
   }
   @media (max-width: 350px) {
      font-size: 0.9rem;
   }
`;

interface ProfileInfoProps {
   data: ProfileInfoInterface;
}

const ProfileInfo = ({ data }: ProfileInfoProps) => {
   const { firstName, lastName, email, username, birthDate, address, age, company, university } =
      data;
   return (
      <MainWrapper>
         <ProfileFullName firstName={firstName} lastName={lastName} />
         <ProfileInfoElementWrapper>
            <ProfileInfoElement Icon={AtSignIcon} body={username} />
            <ProfileInfoElement Icon={MailIcon} body={email} />
            <ProfileInfoElement Icon={Cake} body={getBirthDateWithAge(birthDate, age)} />
            <ProfileInfoElement Icon={HouseIcon} body={getLocation(address)} />
            <ProfileInfoElement Icon={BriefcaseBusinessIcon} body={company.name} />
            <ProfileInfoElement Icon={GraduationCapIcon} body={university} />
         </ProfileInfoElementWrapper>
      </MainWrapper>
   );
};

export default ProfileInfo;
