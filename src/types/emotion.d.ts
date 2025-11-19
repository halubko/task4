import "@emotion/react";

interface ThemeColors {
   main_bg: string;
   content_bg: string;
   text: {
      primary: string;
      secondary: string;
      link: string;
      link_selected: string;
   };
}

declare module "@emotion/react" {
   export interface Theme {
      colors: ThemeColors;
   }
}
