import styled from "@emotion/styled";

export const FormGroup = styled.form`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 16px;
   background-color: ${({ theme }) => theme.colors.background.content};
   border-radius: 16px;
   padding: 24px;
   width: 100%;
   box-sizing: border-box;
   border: ${({ theme }) => theme.borders.base};
`;
