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
         <PostDescriptionTitle aria-label="Post title">{title}</PostDescriptionTitle>
         {PostUIStore.selectedPost ? (
            <DescriptionFull aria-label="Post full description">{description}</DescriptionFull>
         ) : (
            <DescriptionShort aria-label="Post short description">{description}</DescriptionShort>
         )}
      </PostDescriptionWrapper>
   );
};

export default PostDescription;
