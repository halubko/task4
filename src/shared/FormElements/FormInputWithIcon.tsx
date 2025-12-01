import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import type { LucideIcon } from "lucide-react";

const Wrapper = styled.div`
   display: flex;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 10px;
   gap: 8px;
   background-color: ${({ theme }) => theme.colors.background.input};
   color: ${({ theme }) => theme.colors.text.primary};
   width: 100%;
   &:focus {
      outline: none;
      border: ${({ theme }) => theme.borders.focus};
   }
`;

const Input = styled.input`
   background-color: transparent;
   border: none;
   color: ${({ theme }) => theme.colors.text.primary};
   font-size: 1rem;
   width: 100%;
   &:focus {
      outline: none;
   }
`;

interface FormInputProps {
   type: "text" | "password" | "email" | "number" | "date";
   placeholder?: string;
   variant: string;
   Icon: LucideIcon;
}

const FormInput = ({ type = "text", placeholder, variant, Icon }: FormInputProps) => {
   const { register } = useFormContext();

   return (
      <Wrapper>
         <div style={{ display: "flex", alignItems: "center" }}>
            <Icon />:
         </div>
         <Input type={type} {...register(variant)} placeholder={placeholder} />
      </Wrapper>
   );
};

export default FormInput;
