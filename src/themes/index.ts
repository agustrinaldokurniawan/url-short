import { montserrat } from "@/themes/fonts";
import { PaletteOptions, createTheme } from "@mui/material";

// navy: #0C356A
// blue: #0174BE
// yellow: #FFC436
// wedding: #FFF0C

const palette: PaletteOptions = {
  primary: {
    main: "#FFF0CE",
  },
  backdrop: {
    main: "#FFF0CE",
  },
};
const font = [`${montserrat.style.fontFamily}`, "sans-serif"].join(",");

export const theme = createTheme({
  palette,
  typography: {
    allVariants: {
      fontFamily: font,
    },
  },
});
