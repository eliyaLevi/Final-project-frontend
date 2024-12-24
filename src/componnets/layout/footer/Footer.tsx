import { Paper, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1976D2",
          height: "10vh",
          width: "100%",
          m: "0px",
          padding: "0px",
          left: 0,
          right: 0,
        }}
      >
        <Typography sx={{ color: "white" }}>
          © {new Date().getFullYear()} created by Eliya Levi.
        </Typography>
      </Paper>
    </>
  );
};
