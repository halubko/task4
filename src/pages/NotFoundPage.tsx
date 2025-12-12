import styled from "@emotion/styled";
import { CircleX, MoveLeft } from "lucide-react";
import { Link, useLocation, useRouter } from "@tanstack/react-router";

const MainWrapper = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   padding-top: 10vh;
   box-sizing: border-box;
`;

const Wrapper = styled.div`
   border: ${({ theme }) => theme.borders.base};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 1rem;
   width: fit-content;
   height: fit-content;
   border-radius: 8px;
   font-size: 1rem;
   font-weight: bold;
   gap: 10px;
`;

const BackButton = styled(Link)`
   position: relative;
   text-decoration: none;
   justify-content: center;
   padding: 8px;
   display: flex;
   width: 100%;
   gap: 10px;
   border-radius: 8px;
   border: ${({ theme }) => theme.borders.focus};
   color: ${({ theme }) => theme.colors.text.link};
`;

const BackIcon = styled(MoveLeft)`
   position: absolute;
   left: 8px;
   top: 50%;
   transform: translateY(-50%);
`;

const NotFoundPage = () => {
   const { pathname } = useLocation();
   const { history } = useRouter();

   return (
      <MainWrapper>
         <Wrapper>
            <CircleX size={60} color="red" />
            Page "{pathname}" not found
            <BackButton onClick={() => history.back()}>
               <BackIcon />
               Go Back
            </BackButton>
         </Wrapper>
      </MainWrapper>
   );
};

export default NotFoundPage;
