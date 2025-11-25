import { z } from "zod";

export const CreatePostSchema = z
   .object({
      title: z.string().optional(),
      body: z.string().optional(),
      video: z.string().optional(),
   })
   .superRefine(({ title, body, video }, ctx) => {
      if (!title && !body && !video) {
         ctx.addIssue({
            code: "custom",
            message: "Post must contain title, body or video",
            path: ["required"],
         });
      }
   });

export type CreatePostSchemaType = z.infer<typeof CreatePostSchema>;

export const AddCommentSchema = z.object({
   comment: z.string().nonempty("Please enter a comment"),
});

export type AddCommentType = z.infer<typeof AddCommentSchema>;
