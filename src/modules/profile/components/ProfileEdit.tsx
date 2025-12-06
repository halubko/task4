import useUpdateUser from "@/modules/profile/hooks/useUpdateUser.ts";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "@/shared/FormGroup.tsx";
import FormError from "@/shared/FormElements/FormError.tsx";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import FormButton from "@/shared/FormElements/FormButton.tsx";
import { useGetProfile } from "@/modules/profile";
import { authStore } from "@/modules/auth";
import styled from "@emotion/styled";
import ProfileEditHeader from "@/modules/profile/components/ui/ProfileEditHeader.tsx";
import {
   ProfileEditSchema,
   type ProfileEditSchemaType,
} from "@/modules/profile/utils/validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputWithIcon from "@/shared/FormElements/FormInputWithIcon.tsx";
import {
   AtSignIcon,
   BriefcaseBusinessIcon,
   Cake,
   GraduationCapIcon,
   ImageIcon,
   MailIcon,
} from "lucide-react";
import { observer } from "mobx-react-lite";
import { formatBirthDate } from "@/modules/profile/utils/userInfoConverters.ts";
import { useEffect } from "react";

const Wrapper = styled.div`
   max-width: 550px;
   width: 100%;
   margin: 0 auto;
   padding: 0 8px;
   box-sizing: border-box;
`;

export const ProfileEdit = observer(() => {
   const userId = authStore.id;
   const { data, isLoading } = useGetProfile(userId);

   const methods = useForm<ProfileEditSchemaType>({
      resolver: zodResolver(ProfileEditSchema),
   });

   const { mutate, isPending } = useUpdateUser(userId);

   const onSubmit: SubmitHandler<ProfileEditSchemaType> = (formData) => {
      mutate(formData);
   };

   useEffect(() => {
      if (data) {
         methods.reset(formatBirthDate(data));
      }
   }, [data]);

   const {
      formState: { errors },
   } = methods;

   if (isLoading) {
      return <LoadingIndicator />;
   }

   return (
      <Wrapper>
         <FormProvider {...methods}>
            <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
               <ProfileEditHeader />
               <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                  {errors.firstName && <FormError value={errors.firstName.message} />}
                  {errors.lastName && <FormError value={errors.lastName.message} />}
               </div>
               <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                  <FormInput variant="firstName" type="text" placeholder="First name" />
                  <FormInput variant="lastName" type="text" placeholder="Last name" />
               </div>
               {errors.email && <FormError value={errors.email.message} />}
               <FormInputWithIcon Icon={MailIcon} variant="email" type="text" placeholder="Email" />
               {errors.birthDate && <FormError value={errors.birthDate.message} />}
               <FormInputWithIcon
                  Icon={Cake}
                  variant="birthDate"
                  type="date"
                  placeholder="Birth date"
               />
               {errors.username && <FormError value={errors.username.message} />}
               <FormInputWithIcon
                  Icon={AtSignIcon}
                  variant="username"
                  type="text"
                  placeholder="Username"
               />
               {errors.company?.name && <FormError value={errors.company?.name.message} />}
               <FormInputWithIcon
                  Icon={BriefcaseBusinessIcon}
                  variant="company.name"
                  type="text"
                  placeholder="Work"
               />
               {errors.university && <FormError value={errors.university.message} />}
               <FormInputWithIcon
                  Icon={GraduationCapIcon}
                  variant="university"
                  type="text"
                  placeholder="University"
               />
               {errors.image && <FormError value={errors.image.message} />}
               <FormInputWithIcon
                  Icon={ImageIcon}
                  variant="image"
                  type="text"
                  placeholder="University"
               />
               {isPending ? (
                  <LoadingIndicator />
               ) : (
                  <FormButton type="submit">Edit profile</FormButton>
               )}
            </FormGroup>
         </FormProvider>
      </Wrapper>
   );
});
