import ProfileAvatarLink from "@/shared/ProfileAvatarLink.tsx";
import { authStore } from "@/modules/auth";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import { SendHorizonal } from "lucide-react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { AddCommentSchema, type AddCommentType } from "@/modules/posts/utils/validation.utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";
import useSetComment from "@/modules/posts/hooks/useSetComment.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { AddCommForm } from "@/modules/posts/components/styles/ui/PostComment/AddCommentForm.styles.ts";
import { InlineFormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";

interface AddCommentFormProps {
   postId: number;
}

const AddCommentForm = ({ postId }: AddCommentFormProps) => {
   const methods = useForm<AddCommentType>({
      resolver: zodResolver(AddCommentSchema),
      mode: "onSubmit",
   });

   const { mutate, isPending } = useSetComment({ postId, methods });

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
         <AddCommForm onSubmit={methods.handleSubmit(onSubmit)}>
            <ProfileAvatarLink
               userId={authStore.id}
               src={authStore.profilePictureUrl}
               alt="My Profile"
            />
            <FormInput
               type="text"
               variant="comment"
               placeholder="Leave a comment"
               autoComplete="off"
            />
            <div>
               {isPending ? (
                  <LoadingIndicator size="sm" />
               ) : (
                  <InlineFormButton type="submit">
                     <SendHorizonal />
                  </InlineFormButton>
               )}
            </div>
         </AddCommForm>
      </FormProvider>
   );
};

export default AddCommentForm;
