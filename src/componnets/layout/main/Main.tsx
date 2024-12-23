import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <>
      <Box sx={{ marginTop: "3vh" }}>
        <main>{children}</main>
      </Box>
    </>
  );
};
