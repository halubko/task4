import FormInput from "@/shared/atoms/FormElements/FormInput.tsx";
import { AuthHeader } from "@/shared/organisms/AuthHeader.tsx";
import { FormProvider, useForm } from "react-hook-form";
import FormGroup from "@/shared/molecules/FormGroup.tsx";
import FormButton from "@/shared/atoms/FormElements/FormButton.tsx";
import { SignInSchema, type SignInSchemaType } from "@/modules/auth/utils/validation.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/shared/atoms/FormElements/FormError.tsx";
import FormLink from "@/shared/atoms/FormElements/FormLink.tsx";
import useSignIn from "@/modules/auth/hooks/useSignIn.ts";
import { useNavigate } from "@tanstack/react-router";

export const SignInForm = () => {
   const mutation = useSignIn();
   const navigate = useNavigate();

   const methods = useForm<SignInSchemaType>({
      resolver: zodResolver(SignInSchema),
      mode: "onBlur",
   });

   const {
      formState: { errors },
   } = methods;

   const onSubmit = () => {
      mutation.mutate();
      navigate({ to: "/posts" });
   };

   return (
      <FormProvider {...methods}>
         <FormGroup onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthHeader />
            <hr style={{ width: "100%" }} />
            {errors.email && <FormError value={errors.email.message} />}
            <FormInput variant="email" type="text" placeholder="Email" />
            {errors.password && <FormError value={errors.password.message} />}
            <FormInput variant="password" type="password" placeholder="Password" />
            <FormButton type="submit">Sign In</FormButton>
            <FormLink text="Sign Up" path="/signup" />
         </FormGroup>
      </FormProvider>
   );
};
