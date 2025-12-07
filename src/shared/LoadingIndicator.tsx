import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const LoadingIndicatorWrapper = styled.div<{ size: "default" | "sm" }>`
   display: flex;
   align-items: center;
   justify-content: center;
   justify-self: center;
   gap: 6px;
   background-color: ${({ theme }) => theme.colors.background.content};
   padding: ${({ size }) => (size === "default" ? "8px" : "7.5px")};
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

const Dot = styled.span<{ size: "default" | "sm" }>`
   width: ${({ size }) => (size === "default" ? "10px" : "5px")};
   height: ${({ size }) => (size === "default" ? "10px" : "5px")};
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

interface LoadingIndicatorProps {
   size?: "default" | "sm";
}

const LoadingIndicator = ({ size = "default" }: LoadingIndicatorProps) => {
   return (
      <LoadingIndicatorWrapper size={size}>
         <Dot size={size} />
         <Dot size={size} />
         <Dot size={size} />
      </LoadingIndicatorWrapper>
   );
};

export default LoadingIndicator;
