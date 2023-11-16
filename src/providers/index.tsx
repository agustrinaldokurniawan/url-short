"use client";

import { IOnlyChildren } from "@/shared/interface/IOnlyChildren";
import { theme } from "@/themes";
import { ThemeProvider } from "@mui/material";

export default function Providers(props: IOnlyChildren) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
