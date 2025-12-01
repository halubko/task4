import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
   // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
   &&&.Toastify__toast-container {
   }
   .Toastify__toast {
      background-color: ${({ theme }) => theme.colors.background.content};
      color: ${({ theme }) => theme.colors.text.primary};
      border: ${({ theme }) => theme.borders.base};
   }
   .Toastify__toast-body {
   }
   .Toastify__progress-bar {
   }
`;
