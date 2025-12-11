import type { LucideIcon } from "lucide-react";
import { ProfileInfoElementWrapper } from "@/modules/profile/components/styles/ui/ProfileInfoElement.styles.ts";
import { IconWrapper } from "@/shared/styles/IconWrapper.styles.ts";

interface ProfileInfoElementProps {
   Icon: LucideIcon;
   body: string;
}

const ProfileInfoElement = ({ Icon, body }: ProfileInfoElementProps) => {
   return (
      <ProfileInfoElementWrapper>
         <IconWrapper>
            <Icon />:
         </IconWrapper>
         {body}
      </ProfileInfoElementWrapper>
   );
};

export default ProfileInfoElement;
