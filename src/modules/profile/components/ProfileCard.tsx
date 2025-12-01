import styled from "@emotion/styled";
import ProfileAvatar from "@/modules/profile/components/ui/ProfileAvatar.tsx";
import { useGetProfile } from "@/modules/profile";
import { Route } from "@/routes/_main/profile/$profileId.ts";
import { User } from "lucide-react";
import ProfileInfo from "@/modules/profile/components/ui/ProfileInfo.tsx";

const Wrapper = styled.div`
   display: flex;
   justify-content: space-around;
   max-width: 1067px;
   width: 100%;
   justify-self: center;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   margin-bottom: 1rem;
   padding: 8px;
   gap: 8px;
   box-sizing: border-box;
   @media (max-width: 740px) {
      flex-direction: column;
      align-items: center;
      max-width: 550px;
   }
`;

export const ProfileCard = () => {
   const { profileId } = Route.useParams();
   const { data } = useGetProfile(Number(profileId));

   return (
      <div style={{ padding: "0 8px" }}>
         <Wrapper>
            {data?.image ? <ProfileAvatar src={data.image} /> : <User size={86} />}
            {data && <ProfileInfo data={data} />}
         </Wrapper>
      </div>
   );
};
