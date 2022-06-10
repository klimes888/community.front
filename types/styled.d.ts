import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black000: string;
      blue500: string;
      blue400: string;
      blue300: string;
      orange300: string;
    };

    fontsize: {
      font24: number;
      font18: number;
      font16: number;
      font15: number;
      font14: number;
      font12: number;
    };

    fontweight: {
      font700: number;
      font500: number;
      font300: number;
    };
  }
}
