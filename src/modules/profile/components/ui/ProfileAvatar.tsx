import styled from "@emotion/styled";

const Img = styled.img`
   border-radius: 50%;
   max-width: 86px;
   height: 86px;
   align-self: center;
`;

interface ProfileAvatarProps {
   src: string;
}

const ProfileAvatar = ({ src }: ProfileAvatarProps) => <Img src={src} />;

export default ProfileAvatar;
