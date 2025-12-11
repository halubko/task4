import styled from "@emotion/styled";
import PostUIStore from "@/modules/posts/store/post.store.ts";

const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   padding: 8px;
   gap: 8px;
`;

const Title = styled.h2`
   font-size: 1rem;
`;

const DescriptionShort = styled.article`
   font-size: 0.9rem;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const DescriptionFull = styled.article`
   font-size: 0.9rem;
`;

interface PostDescriptionProps {
   title: string;
   description: string;
}

const PostDescription = ({ title, description }: PostDescriptionProps) => {
   return (
      <Wrapper>
         <Title>{title}</Title>
         {PostUIStore.selectedPost ? (
            <DescriptionFull>{description}</DescriptionFull>
         ) : (
            <DescriptionShort>{description}</DescriptionShort>
         )}
      </Wrapper>
   );
};

export default PostDescription;
