import { css, Global, type Theme } from "@emotion/react";

const GlobalStyles = () => (
   <Global
      styles={(theme: Theme) => css`
         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 400;
            src:
               local(""),
               url("src/assets/fonts/VKSansDisplay-Regular.ttf") format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 500;
            src:
               local(""),
               url("src/assets/fonts/VKSansDisplay-Medium.ttf") format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 600;
            src:
               local(""),
               url("src/assets/fonts/VKSansDisplay-DemiBold.ttf") format("truetype");
         }

         @font-face {
            font-family: "VKSans";
            font-style: normal;
            font-weight: 700;
            src:
               local(""),
               url("src/assets/fonts/VKSansDisplay-Bold.ttf") format("truetype");
         }

         html,
         body {
            background: ${theme.colors.main_bg};
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
