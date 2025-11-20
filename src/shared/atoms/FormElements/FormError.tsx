import styled from "@emotion/styled";

const Message = styled.h2`
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 8px;
   font-size: 1rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background.error};
   color: ${({ theme }) => theme.colors.text.error};
`;

interface FormErrorProps {
   value: string | undefined;
}

const FormError = ({ value }: FormErrorProps) => {
   return <Message>{value}</Message>;
};

export default FormError;
