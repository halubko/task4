import "@emotion/react";

interface ThemeColors {
   background: {
      main: string;
      content: string;
      input: string;
      error: string;
      primary_button: string;
      secondary_button: string;
      primary_button_hover: string;
      secondary_button_hover: string;
   };
   text: {
      primary: string;
      secondary: string;
      link: string;
      link_selected: string;
      error: string;
   };
}

interface ThemeBorders {
   base: string;
   focus: string;
}

declare module "@emotion/react" {
   export interface Theme {
      colors: ThemeColors;
      borders: ThemeBorders;
   }
}
