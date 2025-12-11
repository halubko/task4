import type { ProfileInterfaces } from "@/modules/profile/interfaces/Profile.Interfaces.ts";
import ProfileInfoElement from "@/modules/profile/components/ui/ProfileInfoElement.tsx";
import {
   AtSignIcon,
   BriefcaseBusinessIcon,
   Cake,
   GraduationCapIcon,
   HouseIcon,
   MailIcon,
} from "lucide-react";
import {
   getBirthDateWithAge,
   getLocation,
} from "@/modules/profile/utils/userInfoConverters.utils.ts";
import ProfileFullName from "@/modules/profile/components/ui/ProfileFullName.tsx";
import {
   ProfileInfoElementsListWrapper,
   ProfileInfoWrapper,
} from "@/modules/profile/components/styles/ui/ProfileInfo.styles.ts";

interface ProfileInfoProps {
   data: ProfileInterfaces;
}

const ProfileInfo = ({ data }: ProfileInfoProps) => {
   const { firstName, lastName, email, username, birthDate, address, age, company, university } =
      data;
   return (
      <ProfileInfoWrapper>
         <ProfileFullName firstName={firstName} lastName={lastName} />
         <ProfileInfoElementsListWrapper>
            <ProfileInfoElement Icon={AtSignIcon} body={username} />
            <ProfileInfoElement Icon={MailIcon} body={email} />
            <ProfileInfoElement Icon={Cake} body={getBirthDateWithAge(birthDate, age)} />
            <ProfileInfoElement Icon={HouseIcon} body={getLocation(address)} />
            <ProfileInfoElement Icon={BriefcaseBusinessIcon} body={company.name} />
            <ProfileInfoElement Icon={GraduationCapIcon} body={university} />
         </ProfileInfoElementsListWrapper>
      </ProfileInfoWrapper>
   );
};

export default ProfileInfo;
