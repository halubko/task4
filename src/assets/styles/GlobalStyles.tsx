import { css, Global } from "@emotion/react";

const GlobalStyles = () => (
   <Global
      styles={css`
         html,
         body {
            margin: 0;
            padding: 0;
            background: rgb(24, 24, 24);
         }
      `}
   />
);

export default GlobalStyles;
