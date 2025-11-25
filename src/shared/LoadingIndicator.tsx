import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const LoadingIndicatorWrapper = styled.div`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   gap: 6px;
   background-color: ${({ theme }) => theme.colors.background.content};
   padding: 4px;
   border-radius: 4px;
`;

const blink = keyframes`
  0% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
`;

const Dot = styled.span`
   width: 10px;
   height: 10px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.text.primary};
   animation: ${blink} 1.4s infinite both;
   &:nth-of-type(2) {
      animation-delay: 0.2s;
   }
   &:nth-of-type(3) {
      animation-delay: 0.4s;
   }
`;

const LoadingIndicator = () => {
   return (
      <LoadingIndicatorWrapper>
         <Dot />
         <Dot />
         <Dot />
      </LoadingIndicatorWrapper>
   );
};

export default LoadingIndicator;
