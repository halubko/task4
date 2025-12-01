import ModalTemplate from "@/shared/ModalTemplate.tsx";
import FormGroup from "@/shared/FormGroup.tsx";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import FormButton from "@/shared/FormElements/FormButton.tsx";
import PostUIStore from "@/modules/posts/store/postUI.store.ts";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import FormTextarea from "@/shared/FormElements/FormTextarea.tsx";
import useCreatePost from "@/modules/posts/hooks/useCreatePost.ts";
import { authStore } from "@/modules/auth";
import type { CreateFormValues } from "@/modules/posts/interfaces/CreateFormValues.interfaces.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, type CreatePostSchemaType } from "@/modules/posts/utils/validation.ts";
import { CreatePostFormHeader } from "@/modules/posts/components/ui/CreatePostFormHeader.tsx";
import FormError from "@/shared/FormElements/FormError.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { useEffect } from "react";

export const PostCreateModal = observer(() => {
   const methods = useForm<CreatePostSchemaType & { required?: string }>({
      resolver: zodResolver(CreatePostSchema),
      mode: "onSubmit",
   });
   const { mutate, isPending, isSuccess } = useCreatePost();

   useEffect(() => {
      if (isSuccess) {
         methods.reset();
         PostUIStore.setIsCreatePostOpen(false);
      }
   }, [isSuccess, methods]);

   const {
      formState: { errors },
   } = methods;

   const onSubmit: SubmitHandler<CreateFormValues> = (data) => {
      mutate({
         title: data.title,
         body: data.body,
         userId: authStore.id,
      });
   };

   if (!PostUIStore.isCreatePostOpen) return null;

   return (
      <ModalTemplate>
         <FormProvider {...methods}>
            <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
               <CreatePostFormHeader />
               <hr style={{ width: "100%" }} />
               {errors.required && <FormError value={errors.required.message} />}
               <FormInput type="text" placeholder="Title" variant="title" />
               <FormTextarea />
               <FormInput type="text" placeholder="Youtube video link" variant="video" />
               {isPending ? (
                  <LoadingIndicator />
               ) : (
                  <FormButton type="submit">Create Post</FormButton>
               )}
            </FormGroup>
         </FormProvider>
      </ModalTemplate>
   );
});
