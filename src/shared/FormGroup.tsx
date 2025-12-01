import styled from "@emotion/styled";
import type { FormEventHandler, PropsWithChildren } from "react";

const Form = styled.form`
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

interface FormTemplateProps {
   onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function FormGroup({ children, onSubmit }: PropsWithChildren<FormTemplateProps>) {
   return <Form onSubmit={onSubmit}>{children}</Form>;
}
