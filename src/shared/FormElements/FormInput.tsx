import { useFormContext } from "react-hook-form";
import type { InputHTMLAttributes } from "react";
import { FormInputStyles } from "@/shared/styles/FormElements/FormInput.styles.ts";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
   type: "text" | "password" | "email";
   placeholder?: string;
   variant: string;
}

const FormInput = ({ type = "text", placeholder, variant, ...props }: FormInputProps) => {
   const { register } = useFormContext();

   return (
      <FormInputStyles type={type} {...register(variant)} placeholder={placeholder} {...props} />
   );
};

export default FormInput;
