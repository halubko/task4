import styled from "@emotion/styled";

export const ProfileAvatarImg = styled.img`
   width: 28px;
   height: 28px;
   border-radius: 50%;
   border: 2px solid transparent;
   transition: all 0.2s ease-in-out;
   box-sizing: border-box;
`;

export const ProfileAvatarLinkWrapper = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.text.link};
   font-weight: 600;
`;
