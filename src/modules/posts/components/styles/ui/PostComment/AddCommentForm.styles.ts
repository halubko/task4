import styled from "@emotion/styled";

export const AddCommForm = styled.form`
   display: flex;
   align-items: center;
   gap: 8px;
   background-color: ${({ theme }) => theme.colors.background.content};
   border-radius: 8px;
   width: 100%;
   padding: 4px;
   box-sizing: border-box;
   border: ${({ theme }) => theme.borders.base};
`;
