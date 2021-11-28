
import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
      colors: {
        white: string,
        blue500:string,
        blue400:string,
        blue300:string,
        orange300:string
      };

      fontsize: {
        font18:number,
        font15:number
      };

      fontweight: {
        font700:number,
        font500:number,
        font300:number
      }
    }
  }

