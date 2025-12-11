import { useFormContext } from "react-hook-form";
import { FormTextareaStyles } from "@/shared/styles/FormElements/FormTextarea.styles.ts";

const FormTextarea = () => {
   const { register } = useFormContext();

   return <FormTextareaStyles placeholder="Description" {...register("body")} />;
};

export default FormTextarea;
