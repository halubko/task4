import { BadgePlus } from "lucide-react";
import { CreatePostFormHeaderWrapper } from "@/modules/posts/components/styles/ui/CreatePostFormHeader.styles.ts";
import { FormTitle } from "@/shared/styles/FormElements/FormTitle.styles.ts";

export const CreatePostFormHeader = () => {
   return (
      <CreatePostFormHeaderWrapper>
         <BadgePlus size={42} />
         <FormTitle>Create Post</FormTitle>
      </CreatePostFormHeaderWrapper>
   );
};
