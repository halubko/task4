import { useGetProfile } from "@/modules/profile";
import { Route } from "@/routes/_main/profile/$profileId.ts";
import { User } from "lucide-react";
import ProfileInfo from "@/modules/profile/components/ui/ProfileInfo.tsx";
import { ProfileCardWrapper } from "@/modules/profile/components/styles/ProfileCard.styles.ts";
import { ProfileAvatar } from "@/modules/profile/components/styles/ui/ProfileAvatar.styles.ts";

export const ProfileCard = () => {
   const { profileId } = Route.useParams();
   const { data } = useGetProfile(Number(profileId));

   return (
      <div style={{ padding: "0 8px" }}>
         <ProfileCardWrapper>
            {data?.image ? <ProfileAvatar src={data.image} /> : <User size={86} />}
            {data && <ProfileInfo data={data} />}
         </ProfileCardWrapper>
      </div>
   );
};
