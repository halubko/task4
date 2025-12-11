import useUpdateUser from "@/modules/profile/hooks/useUpdateUser.ts";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/shared/FormElements/FormInput.tsx";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { useGetProfile } from "@/modules/profile";
import { authStore } from "@/modules/auth";
import ProfileEditHeader from "@/modules/profile/components/ui/ProfileEditHeader.tsx";
import {
   ProfileEditSchema,
   type ProfileEditSchemaType,
} from "@/modules/profile/utils/validation.utils.ts";
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
import { formatBirthDate } from "@/modules/profile/utils/userInfoConverters.utils.ts";
import { useEffect } from "react";
import { ProfileEditWrapper } from "@/modules/profile/components/styles/ProfileEdit.styles.ts";
import { FormNameWrapper } from "@/shared/styles/FormElements/FormName.styles.ts";
import { FormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";
import { FormError } from "@/shared/styles/FormElements/FormError.styles.ts";
import { FormGroup } from "@/shared/styles/FormGroup.styles.ts";

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
      <ProfileEditWrapper>
         <FormProvider {...methods}>
            <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
               <ProfileEditHeader />
               <FormNameWrapper>
                  {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
                  {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
               </FormNameWrapper>
               <FormNameWrapper>
                  <FormInput variant="firstName" type="text" placeholder="First name" />
                  <FormInput variant="lastName" type="text" placeholder="Last name" />
               </FormNameWrapper>
               {errors.email && <FormError>{errors.email.message}</FormError>}
               <FormInputWithIcon Icon={MailIcon} variant="email" type="text" placeholder="Email" />
               {errors.birthDate && <FormError>{errors.birthDate.message}</FormError>}
               <FormInputWithIcon
                  Icon={Cake}
                  variant="birthDate"
                  type="date"
                  placeholder="Birth date"
               />
               {errors.username && <FormError>{errors.username.message}</FormError>}
               <FormInputWithIcon
                  Icon={AtSignIcon}
                  variant="username"
                  type="text"
                  placeholder="Username"
               />
               {errors.company?.name && <FormError>{errors.company.message}</FormError>}
               <FormInputWithIcon
                  Icon={BriefcaseBusinessIcon}
                  variant="company.name"
                  type="text"
                  placeholder="Work"
               />
               {errors.university && <FormError>{errors.university.message}</FormError>}
               <FormInputWithIcon
                  Icon={GraduationCapIcon}
                  variant="university"
                  type="text"
                  placeholder="University"
               />
               {errors.image && <FormError>{errors.image.message}</FormError>}
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
      </ProfileEditWrapper>
   );
});
