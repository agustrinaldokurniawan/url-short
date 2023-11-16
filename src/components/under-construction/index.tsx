"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Typography } from "@mui/material";
import UnderConstructionAnimation from "@/assets/animations/under-construction.json";

export default function UnderConstruction() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      textAlign={"center"}
      height={"100vh"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Player
        autoplay
        loop
        src={UnderConstructionAnimation}
        style={{ width: "300px", height: "300px" }}
      />
      <Typography variant="h5">URL Shortener</Typography>
    </Box>
  );
}
