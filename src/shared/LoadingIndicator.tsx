import { Dot, LoadingIndicatorWrapper } from "@/shared/styles/LoadingIndicator.styles.ts";

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
