import styled from "@emotion/styled";
import { SignInForm } from "@/modules/auth";

const Wrapper = styled.div`
   max-width: 400px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   height: 100vh;
   padding: 0 10px;
`;

const SignInPage = () => {
   return (
      <Wrapper>
         <SignInForm />
      </Wrapper>
   );
};

export default SignInPage;
