import styled from "@emotion/styled";
import ProfileAvatarLink from "@/shared/atoms/ProfileAvatarLink.tsx";
import { authStore } from "@/modules/auth";
import FormInput from "@/shared/atoms/FormElements/FormInput.tsx";
import FormButton from "@/shared/atoms/FormElements/FormButton.tsx";
import { SendHorizonal } from "lucide-react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { AddCommentSchema, type AddCommentType } from "@/modules/posts/utils/validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment } from "@/modules/posts/api/commentsAPI.ts";
import { toast } from "react-toastify";
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

interface AddCommentFormProps {
   postId: number;
}

const AddCommentForm = ({ postId }: AddCommentFormProps) => {
   const methods = useForm<AddCommentType>({
      resolver: zodResolver(AddCommentSchema),
      mode: "onSubmit",
   });
   const queryClient = useQueryClient();

   const { mutate } = useMutation({
      mutationKey: ["add", "comment"],
      mutationFn: addComment,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["get", "post", "comments", postId] });
         methods.reset();
      },
      onError: (error) => {
         toast.error("Failed to add a comment: " + error.message);
      },
   });

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
            <FormInput type="text" variant="comment" placeholder="Leave a comment" />
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
