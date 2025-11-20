import styled from "@emotion/styled";
import { SignUpForm } from "@/modules/auth";

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
         <SignUpForm />
      </Wrapper>
   );
};

export default SignInPage;
