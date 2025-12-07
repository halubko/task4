import styled from "@emotion/styled";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import FormButton from "@/shared/FormElements/FormButton.tsx";
import { SendHorizonal } from "lucide-react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useWebSocket } from "@/modules/chat";
import { Route } from "@/routes/_main/messages/$userId.ts";
import { useEffect } from "react";

const Form = styled.form`
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

interface FormInputInterface {
   message: string;
}

const ChatFooter = () => {
   const methods = useForm<FormInputInterface>();
   const { sendMessage } = useWebSocket();
   const { userId } = Route.useParams();

   useEffect(() => {
      methods.setFocus("message");
   }, [methods]);

   const onSubmit: SubmitHandler<FormInputInterface> = ({ message }) => {
      if (message.trim() !== "") {
         sendMessage(message, Number(userId));
         methods.setValue("message", "");
      }
   };

   return (
      <FormProvider {...methods}>
         <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput
               type="text"
               variant="message"
               placeholder="Text message"
               autoComplete="off"
            />
            <div>
               <FormButton
                  type="submit"
                  style={{ padding: "7px", display: "flex", alignItems: "center" }}
               >
                  <SendHorizonal />
               </FormButton>
            </div>
         </Form>
      </FormProvider>
   );
};

export default ChatFooter;
