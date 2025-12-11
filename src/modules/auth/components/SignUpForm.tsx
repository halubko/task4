import FormInput from "@/shared/FormElements/FormInput.tsx";
import { AuthHeader } from "@/modules/auth/components/ui/AuthHeader.tsx";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, type SignUpSchemaType } from "@/modules/auth/utils/validation.utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignUp from "@/modules/auth/hooks/useSignUp.ts";
import type { SignUpFormValues } from "@/modules/auth/interfaces/UserInfo.Interfaces.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { HorizLineStyles } from "@/shared/styles/HorizLine.styles.ts";
import { FormNameWrapper } from "@/shared/styles/FormElements/FormName.styles.ts";
import { FormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";
import { FormError } from "@/shared/styles/FormElements/FormError.styles.ts";
import { FormLink } from "@/shared/styles/FormElements/FormLink.styles.ts";
import { FormGroup } from "@/shared/styles/FormGroup.styles.ts";

export const SignUpForm = () => {
   const { mutate, isPending } = useSignUp();

   const methods = useForm<SignUpSchemaType>({
      resolver: zodResolver(SignUpSchema),
      mode: "onBlur",
   });

   const {
      formState: { errors },
   } = methods;

   const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
      mutate(data);
   };

   return (
      <FormProvider {...methods}>
         <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthHeader />
            <HorizLineStyles />
            <FormNameWrapper>
               {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
               {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
            </FormNameWrapper>
            <FormNameWrapper>
               <FormInput variant="firstName" type="text" placeholder="First name" />
               <FormInput variant="lastName" type="text" placeholder="Last name" />
            </FormNameWrapper>
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <FormInput variant="email" type="text" placeholder="Email" />
            {errors.password && <FormError>{errors.password.message}</FormError>}
            <FormInput variant="password" type="password" placeholder="Password" />
            {errors.confirmPassword && <FormError>{errors.confirmPassword.message}</FormError>}
            <FormInput variant="confirmPassword" type="password" placeholder="Confirm password" />
            {isPending ? <LoadingIndicator /> : <FormButton type="submit">Sign Up</FormButton>}
            <FormLink to="/signin">Sign Up</FormLink>
         </FormGroup>
      </FormProvider>
   );
};
