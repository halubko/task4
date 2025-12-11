import styled from "@emotion/styled";

export const ProfileInfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
   @media (max-width: 468px) {
      align-items: center;
   }
`;

export const ProfileInfoElementsListWrapper = styled.div`
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
