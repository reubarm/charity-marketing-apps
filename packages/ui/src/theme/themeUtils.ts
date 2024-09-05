import { themeOptions } from './themeOptions';
import { PaletteColor } from '@mui/material/styles/createPalette';

type ThemeName = keyof typeof themeOptions;

interface PrimaryColors {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export const getPrimaryColors = (themeName: ThemeName): PrimaryColors => {
  const theme = themeOptions[themeName];
    const primary = theme?.palette?.primary as PaletteColor;
    const { light, main, dark, contrastText } = primary;
    return { light, main, dark, contrastText };
};
