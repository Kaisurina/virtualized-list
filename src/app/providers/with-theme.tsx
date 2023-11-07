import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "shared/libs/redux";

export const withTheme = (Component: React.ComponentType) => () => {
  const state = useAppSelector((state) => state.theme);
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
    palette: {
      mode: state.mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component />
    </ThemeProvider>
  );
};
