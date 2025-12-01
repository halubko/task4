import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import { useFormContext } from "react-hook-form";

const Textarea = styled(TextareaAutosize)`
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   box-sizing: border-box;
   padding: 10px;
   font-size: 1rem;
   width: 100%;
   resize: none;
   background-color: ${({ theme }) => theme.colors.background.input};
   color: ${({ theme }) => theme.colors.text.primary};
   text-decoration: none;
   &:focus {
      outline: none;
      border: ${({ theme }) => theme.borders.focus};
   }
`;

const FormTextarea = () => {
   const { register } = useFormContext();

   return <Textarea placeholder="Description" {...register("body")} />;
};

export default FormTextarea;
