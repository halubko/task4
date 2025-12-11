import { z } from "zod";

export const SignInSchema = z.object({
   email: z.email("Invalid email format").nonempty("Email is required"),
   password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password must be less than 30 characters")
      .regex(/[0-9]/, "Password must have at least 1 number")
      .regex(/[A-Z]/, "Password must have at least 1 uppercase letter")
      .regex(
         /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
         "Password must have at least 1 special character"
      )
      .nonempty("Password is required"),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
   .object({
      firstName: z
         .string()
         .min(3, "First name should be at least 3 characters")
         .nonempty("First name is required"),
      lastName: z
         .string()
         .min(3, "Last name should be at least 3 characters")
         .nonempty("Last name is required"),
      email: z.email("Invalid email format").nonempty("Email is required"),
      password: z
         .string()
         .min(8, "Password must be at least 8 characters")
         .max(30, "Password must be less than 30 characters")
         .regex(/[0-9]/, "Password must have at least 1 number")
         .regex(/[A-Z]/, "Password must have at least 1 uppercase letter")
         .regex(
            /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
            "Password must have at least 1 special character"
         )
         .nonempty("Password is required"),
      confirmPassword: z.string().nonempty("Confirm your password"),
   })
   .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
         ctx.addIssue({
            code: "custom",
            message: "The passwords do not match",
            path: ["confirmPassword"],
         });
      }
   });

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
