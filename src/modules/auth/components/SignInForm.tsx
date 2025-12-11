import FormInput from "@/shared/FormElements/FormInput.tsx";
import { AuthHeader } from "@/modules/auth/components/ui/AuthHeader.tsx";
import { FormProvider, useForm } from "react-hook-form";
import FormGroup from "@/shared/FormGroup.tsx";
import FormButton from "@/shared/FormElements/FormButton.tsx";
import { SignInSchema, type SignInSchemaType } from "@/modules/auth/utils/validation.utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "@/shared/FormElements/FormError.tsx";
import FormLink from "@/shared/FormElements/FormLink.tsx";
import useSignIn from "@/modules/auth/hooks/useSignIn.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";

export const SignInForm = () => {
   const { mutate, isPending } = useSignIn();

   const methods = useForm<SignInSchemaType>({
      resolver: zodResolver(SignInSchema),
      mode: "onBlur",
   });

   const {
      formState: { errors },
   } = methods;

   const onSubmit = () => {
      mutate();
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
            {isPending ? <LoadingIndicator /> : <FormButton type="submit">Sign In</FormButton>}
            <FormLink text="Sign Up" path="/signup" />
         </FormGroup>
      </FormProvider>
   );
};
