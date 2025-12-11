import { useFormContext } from "react-hook-form";
import type { LucideIcon } from "lucide-react";
import {
   FormInputWithIconWrapper,
   FormWithIconInput,
} from "@/shared/styles/FormElements/FormInputWithIcon.styles.ts";
import { IconWrapper } from "@/shared/styles/IconWrapper.styles.ts";

interface FormInputProps {
   type: "text" | "password" | "email" | "number" | "date";
   placeholder?: string;
   variant: string;
   Icon: LucideIcon;
}

const FormInput = ({ type = "text", placeholder, variant, Icon }: FormInputProps) => {
   const { register } = useFormContext();

   return (
      <FormInputWithIconWrapper>
         <IconWrapper>
            <Icon />:
         </IconWrapper>
         <FormWithIconInput type={type} {...register(variant)} placeholder={placeholder} />
      </FormInputWithIconWrapper>
   );
};

export default FormInput;
