import FormInput from "@/shared/FormElements/FormInput.tsx";
import { AuthHeader } from "@/modules/auth/components/ui/AuthHeader.tsx";
import { FormProvider, useForm } from "react-hook-form";
import { SignInSchema, type SignInSchemaType } from "@/modules/auth/utils/validation.utils.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignIn from "@/modules/auth/hooks/useSignIn.ts";
import LoadingIndicator from "@/shared/LoadingIndicator.tsx";
import { HorizLineStyles } from "@/shared/styles/HorizLine.styles.ts";
import { FormButton } from "@/shared/styles/FormElements/FormButton.styles.ts";
import { FormError } from "@/shared/styles/FormElements/FormError.styles.ts";
import { FormLink } from "@/shared/styles/FormElements/FormLink.styles.ts";
import { FormGroup } from "@/shared/styles/FormGroup.styles.ts";

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
            <HorizLineStyles />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <FormInput variant="email" type="text" placeholder="Email" />
            {errors.password && <FormError>{errors.password.message}</FormError>}
            <FormInput variant="password" type="password" placeholder="Password" />
            {isPending ? <LoadingIndicator /> : <FormButton type="submit">Sign In</FormButton>}
            <FormLink to="/signup">Sign Up</FormLink>
         </FormGroup>
      </FormProvider>
   );
};
