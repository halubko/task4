import FormInput from "@/shared/FormElements/FormInput.tsx";
import { SendHorizonal } from "lucide-react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { useWebSocket } from "@/modules/chat";
import { Route } from "@/routes/_main/messages/$userId.ts";
import { useEffect } from "react";
import { ChatFooterForm } from "@/modules/chat/components/styles/ui/ChatFooter/ChatFooter.styles.ts";
import { InlineFormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";

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
         <ChatFooterForm onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput
               type="text"
               variant="message"
               placeholder="Text message"
               autoComplete="off"
            />
            <div>
               <InlineFormButton type="submit">
                  <SendHorizonal />
               </InlineFormButton>
            </div>
         </ChatFooterForm>
      </FormProvider>
   );
};

export default ChatFooter;
