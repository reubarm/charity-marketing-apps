import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: { [key: string]: ThemeOptions } = {
  learning: {
    palette: {
      mode: 'light',
      primary: {
        light: "#7FA1C3",
        main: "#6482AD",
        dark: "#8e828f",
        contrastText: "#606476",
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#fff',
        paper: '#f6f1ed',
      },
    },
    typography: {
      fontFamily: "Gabarito, Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif"
    },
  },
  playing: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#4dc0ca',
        contrastText: "#FFFFFF",
        light: "#aaf8ff",
      },
      secondary: {
        main: '#00e676',
      },
      background: {
        default: '#43b1bb',
        paper: '#4dc0ca',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  },
};
