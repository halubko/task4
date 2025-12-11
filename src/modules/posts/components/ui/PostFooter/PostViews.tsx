import { Eye } from "lucide-react";
import { PostViewsWrapper } from "@/modules/posts/components/styles/ui/PostFooter/PostViews.styles.ts";

const PostViews = ({ views }: { views: number }) => {
   return (
      <PostViewsWrapper>
         <Eye />
         {views}
      </PostViewsWrapper>
   );
};

export default PostViews;
