"use client";

import { IOnlyChildren } from "@/shared/interface/IOnlyChildren";
import { theme } from "@/themes";
import { montserrat } from "@/themes/fonts";
import { Box, Container } from "@mui/material";

export default function AppLayout(props: IOnlyChildren) {
  return (
    <Box className={montserrat.className} bgcolor={theme.palette.backdrop.main}>
      <Container>{props.children}</Container>
    </Box>
  );
}
