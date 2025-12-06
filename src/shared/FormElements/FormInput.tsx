import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import type { InputHTMLAttributes } from "react";

const Input = styled.input`
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 10px;
   font-size: 1rem;
   width: 100%;
   background-color: ${({ theme }) => theme.colors.background.input};
   color: ${({ theme }) => theme.colors.text.primary};
   &:focus {
      outline: none;
      border: ${({ theme }) => theme.borders.focus};
   }
`;

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
   type: "text" | "password" | "email";
   placeholder?: string;
   variant: string;
}

const FormInput = ({ type = "text", placeholder, variant, ...props }: FormInputProps) => {
   const { register } = useFormContext();

   return <Input type={type} {...register(variant)} placeholder={placeholder} {...props} />;
};

export default FormInput;
