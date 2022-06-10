import { Theme } from '@emotion/react';

const COLORS = {
  white: '#ffffff',
  black000: '#111111',
  blue500: '#232f34',
  blue400: '#344955',
  blue300: '#4a6572',
  orange300: '#f9aa33',
};

const FONT_SIZE = {
  font24: 24,
  font18: 18,
  font16: 16,
  font15: 15,
  font14: 14,
  font12: 12,
};

const FONT_WEIGHT = {
  font700: 700,
  font500: 500,
  font300: 300,
};

export const theme: Theme = {
  colors: COLORS,
  fontsize: FONT_SIZE,
  fontweight: FONT_WEIGHT,
};
