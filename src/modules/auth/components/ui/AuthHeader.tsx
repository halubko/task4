import { TvMinimalPlay } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import styled from "@emotion/styled";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 8px;
`;

export const AuthHeader = () => {
   const location = useLocation();

   return (
      <Wrapper>
         <TvMinimalPlay size={42} />
         <h1 style={{ fontSize: "24px" }}>
            {location.pathname === "/signin" ? "Sign in" : "Sign up"} to ErrorTube
         </h1>
      </Wrapper>
   );
};
