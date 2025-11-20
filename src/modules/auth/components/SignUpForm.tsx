import FormInput from "@/shared/atoms/FormElements/FormInput.tsx";
import { AuthHeader } from "@/shared/organisms/AuthHeader.tsx";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "@/shared/molecules/FormGroup.tsx";
import FormButton from "@/shared/atoms/FormElements/FormButton.tsx";
import { SignUpSchema, type SignUpSchemaType } from "@/modules/auth/utils/validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/shared/atoms/FormElements/FormError.tsx";
import FormLink from "@/shared/atoms/FormElements/FormLink.tsx";
import { useNavigate } from "@tanstack/react-router";
import useSignUp from "@/modules/auth/hooks/useSignUp.ts";
import type { SignUpFormValues } from "@/modules/auth/types/UserInfo.Interface.ts";

export const SignUpForm = () => {
   const mutation = useSignUp();
   const navigate = useNavigate();

   const methods = useForm<SignUpSchemaType>({
      resolver: zodResolver(SignUpSchema),
      mode: "onBlur",
   });

   const {
      formState: { errors },
   } = methods;

   const onSubmit: SubmitHandler<SignUpFormValues> = (data) => {
      mutation.mutate(data);
      navigate({ to: "/posts" });
   };

   return (
      <FormProvider {...methods}>
         <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthHeader />
            <hr style={{ width: "100%" }} />
            <div style={{ width: "100%", display: "flex", gap: "10px" }}>
               {errors.firstName && <FormError value={errors.firstName.message} />}
               {errors.lastName && <FormError value={errors.lastName.message} />}
            </div>
            <div style={{ width: "100%", display: "flex", gap: "10px" }}>
               <FormInput variant="firstName" type="text" placeholder="First name" />
               <FormInput variant="lastName" type="text" placeholder="Last name" />
            </div>
            {errors.email && <FormError value={errors.email.message} />}
            <FormInput variant="email" type="text" placeholder="Email" />
            {errors.password && <FormError value={errors.password.message} />}
            <FormInput variant="password" type="password" placeholder="Password" />
            {errors.confirmPassword && <FormError value={errors.confirmPassword.message} />}
            <FormInput variant="confirmPassword" type="password" placeholder="Confirm password" />
            <FormButton type="submit">Sign In</FormButton>
            <FormLink text="Sign Up" path="/signin" />
         </FormGroup>
      </FormProvider>
   );
};
