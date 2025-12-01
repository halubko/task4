import { z } from "zod";

export const ProfileEditSchema = z.object({
   firstName: z.string().nonempty("First name is required"),
   lastName: z.string().nonempty("Last name is required"),
   email: z.string().nonempty("Email is required"),
   company: z.object({
      name: z.string(),
   }),
   university: z.string(),
   username: z.string().nonempty("Username is required"),
   birthDate: z.string(),
   image: z.string(),
});

export type ProfileEditSchemaType = z.infer<typeof ProfileEditSchema>;
