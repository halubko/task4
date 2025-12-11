import styled from "@emotion/styled";

export const ProfileCardWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   max-width: 1067px;
   width: 100%;
   margin: 0 auto 1rem auto;
   background-color: ${({ theme }) => theme.colors.background.content};
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   padding: 8px;
   gap: 8px;
   box-sizing: border-box;
   @media (max-width: 740px) {
      flex-direction: column;
      align-items: center;
      max-width: 550px;
   }
`;
