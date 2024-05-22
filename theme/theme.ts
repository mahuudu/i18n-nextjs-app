'use client';

import {Poppins} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import { components } from "./components";

import {primary, themeColors} from './themeColors';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const breakpoints = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1280,
    xl: 1536,
  },
};

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components : { ...components},
  breakpoints,
  palette: {
    ...themeColors,
    primary: {...primary, light: primary[100], dark: primary[100]},
  },
});

export default theme;
