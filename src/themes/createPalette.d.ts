import {
  ThemeProvider,
  createTheme,
  PaletteColor,
  SimplePaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backdrop: PaletteColor;
  }

  interface PaletteOptions {
    backdrop: SimplePaletteColorOptions;
  }
}