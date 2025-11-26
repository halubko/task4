import styled from "@emotion/styled";

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   max-width: 1067px;
   width: 100%;
   justify-self: center;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   margin-bottom: 1rem;
`;

export const ProfileCard = () => {
   return <Wrapper></Wrapper>;
};
