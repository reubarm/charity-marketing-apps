"use client";

import { ReactNode, useMemo } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { themeOptions } from "./themeOptions";
import { styles } from "./styles";

interface ThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  const selectedTheme = useMemo(() => {
    return createTheme(themeOptions[theme]);
  }, [theme]);

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <html lang="en">
      <body style={{background: isMobile ? selectedTheme.palette.background.paper : selectedTheme.palette.background.default}}>
        <MuiThemeProvider theme={selectedTheme}>
          <main className={styles.main}>
            <CssBaseline />
            {children}
          </main>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(["learning", "playing"]).isRequired,
};
