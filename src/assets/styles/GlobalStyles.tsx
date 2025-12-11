import { css, Global, type Theme } from "@emotion/react";

import RegularFont from "@/assets/fonts/VKSansDisplay-Regular.ttf";
import MediumFont from "@/assets/fonts/VKSansDisplay-Medium.ttf";
import DemiBoldFont from "@/assets/fonts/VKSansDisplay-DemiBold.ttf";
import BoldFont from "@/assets/fonts/VKSansDisplay-Bold.ttf";

const GlobalStyles = () => (
   <Global
      styles={(theme: Theme) => css`
         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src:
               local(""),
               url(${RegularFont}) format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src:
               local(""),
               url(${MediumFont}) format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src:
               local(""),
               url(${DemiBoldFont}) format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src:
               local(""),
               url(${BoldFont}) format("truetype");
         }

         html,
         body {
            background: ${theme.colors.background.main};
            color: ${theme.colors.text.primary};
            font-family: "VKSans", serif;
            font-weight: 400;
         }
         ,
         * {
            margin: 0;
            padding: 0;
         }
      `}
   />
);

export default GlobalStyles;
