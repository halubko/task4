import styled from "@emotion/styled";
import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { authStore } from "@/modules/auth";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import FormButton from "@/shared/FormElements/FormButton.tsx";
import { SendHorizonal } from "lucide-react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { AddCommentSchema, type AddCommentType } from "@/modules/posts/utils/validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useSetComment from "@/modules/posts/hooks/useSetComment.ts";

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

interface AddCommentFormProps {
   postId: number;
}

const AddCommentForm = ({ postId }: AddCommentFormProps) => {
   const methods = useForm<AddCommentType>({
      resolver: zodResolver(AddCommentSchema),
      mode: "onSubmit",
   });

   const { mutate } = useSetComment({ postId, methods });

   const {
      formState: { errors },
   } = methods;

   useEffect(() => {
      if (errors.comment) {
         toast.error(errors.comment.message);
      }
   }, [errors]);

   const onSubmit: SubmitHandler<AddCommentType> = (data) => {
      mutate({
         body: data.comment,
         userId: authStore.id,
         postId,
      });
   };

   return (
      <FormProvider {...methods}>
         <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <ProfileAvatarLink userId={authStore.id} src={authStore.profilePictureUrl} />
            <FormInput
               type="text"
               variant="comment"
               placeholder="Leave a comment"
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

export default AddCommentForm;
