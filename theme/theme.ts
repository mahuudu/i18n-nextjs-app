'use client';
import {Poppins} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

import {primary, themeColors} from './themeColors';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1440,
    xl: 1920,
  },
};

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  breakpoints,
  palette: {
    ...themeColors,
    primary: {...primary, light: primary[100]},
  },
});

export default theme;
