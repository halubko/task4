import ModalTemplate from "@/shared/ModalTemplate.tsx";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import PostUIStore from "@/modules/posts/store/post.store.ts";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react-lite";
import FormTextarea from "@/shared/FormElements/FormTextarea.tsx";
import useCreatePost from "@/modules/posts/hooks/useCreatePost.ts";
import { authStore } from "@/modules/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   CreatePostSchema,
   type CreatePostSchemaType,
} from "@/modules/posts/utils/validation.utils.ts";
import { CreatePostFormHeader } from "@/modules/posts/components/ui/CreatePostFormHeader.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { useEffect, useState } from "react";
import { HorizLineStyles } from "@/shared/styles/HorizLine.styles.ts";
import { FormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";
import { FormError } from "@/shared/styles/FormElements/FormError.styles.ts";
import { FormGroup } from "@/shared/styles/FormGroup.styles.ts";
import { ImageIcon, Youtube } from "lucide-react";
import {
   LinkToggleButton,
   PostCreateModalLinkWrapper,
} from "@/modules/posts/components/styles/PostCreateModal.styles.ts";

export const PostCreateModal = observer(() => {
   const [isVideoPost, setIsVideoPost] = useState<boolean>(false);
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

   const onSubmit: SubmitHandler<CreatePostSchemaType> = (data) => {
      mutate({
         title: data.title,
         body: data.body,
         userId: authStore.id,
      });
   };

   const toggleLink = () => setIsVideoPost((prev) => !prev);

   if (!PostUIStore.isCreatePostOpen) return null;

   return (
      <ModalTemplate>
         <FormProvider {...methods}>
            <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
               <CreatePostFormHeader />
               <HorizLineStyles />
               {errors.required && <FormError>{errors.required.message}</FormError>}
               <FormInput type="text" placeholder="Title" variant="title" />
               <FormTextarea />
               <PostCreateModalLinkWrapper>
                  {isVideoPost ? (
                     <FormInput
                        type="text"
                        placeholder="Youtube video link"
                        variant="video"
                        autoComplete="off"
                     />
                  ) : (
                     <FormInput
                        type="text"
                        placeholder="Image link"
                        variant="image"
                        autoComplete="off"
                     />
                  )}
                  <div>
                     <LinkToggleButton type="button" onClick={toggleLink} isVideo={isVideoPost}>
                        {isVideoPost ? <Youtube /> : <ImageIcon />}
                     </LinkToggleButton>
                  </div>
               </PostCreateModalLinkWrapper>
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
