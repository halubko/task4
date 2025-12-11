import PostUIStore from "@/modules/posts/store/post.store.ts";
import {
   DescriptionFull,
   DescriptionShort,
   PostDescriptionTitle,
   PostDescriptionWrapper,
} from "@/modules/posts/components/styles/ui/PostMain/PostDescription.styles.ts";

interface PostDescriptionProps {
   title: string;
   description: string;
}

const PostDescription = ({ title, description }: PostDescriptionProps) => {
   return (
      <PostDescriptionWrapper>
         <PostDescriptionTitle>{title}</PostDescriptionTitle>
         {PostUIStore.selectedPost ? (
            <DescriptionFull>{description}</DescriptionFull>
         ) : (
            <DescriptionShort>{description}</DescriptionShort>
         )}
      </PostDescriptionWrapper>
   );
};

export default PostDescription;
