import styled from "@emotion/styled";
import { SignInForm, SignUpForm } from "@/modules/auth";
import { useLocation } from "@tanstack/react-router";

const Wrapper = styled.div`
   max-width: 400px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   height: 100vh;
   padding: 0 10px;
`;

const AuthPage = () => {
   const { pathname } = useLocation();

   return <Wrapper>{pathname === "/signin" ? <SignInForm /> : <SignUpForm />}</Wrapper>;
};

export default AuthPage;
