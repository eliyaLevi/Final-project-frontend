import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ButtonGroup, Stack } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ margin: 0, padding: 0, marginBottom: 10 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              sx={{
                position: "sticky",
                backgroundColor: "#1976D2",
                height: 60,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#1976d2", // צבע רקע כחול
                  borderRadius: "8px",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "#115293", // צבע רקע כהה יותר במעבר עכבר
                  },
                }}
                component={NavLink}
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                שאלה 1
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#1976d2", // צבע רקע כחול
                  borderRadius: "8px",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "#115293", // צבע רקע כהה יותר במעבר עכבר
                  },
                }}
                component={NavLink}
                to="/Casualty_regions"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                שאלה 2
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#1976d2", // צבע רקע כחול
                  borderRadius: "8px",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "#115293", // צבע רקע כהה יותר במעבר עכבר
                  },
                }}
                component={NavLink}
                to="/Incident_trends"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                שאלה 3
              </Box>
              <Box
                sx={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#1976d2", // צבע רקע כחול
                  borderRadius: "8px",
                  textDecoration: "none",
                  "&:hover": {
                    backgroundColor: "#115293", // צבע רקע כהה יותר במעבר עכבר
                  },
                }}
                component={NavLink}
                to="/Adding_terrorist_act"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                הוספת מעשה טרור
              </Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

// import { Box, Button, Stack, Typography } from "@mui/material";
// import { blue } from "@mui/material/colors";
// import React from "react";
// import { NavLink } from "react-router-dom";

// export const NavBar = () => {
//   return (
//     <>
//       <Stack
//         sx={{
//           position: "sticky",
//           backgroundColor: "#1976D2",
//           height: 60,
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "row",
//         }}
//       >
//         <Box
//           sx={{
//             display: "inline-block",
//             padding: "10px 20px",
//             backgroundColor: "#1976d2", // צבע רקע כחול
//             borderRadius: "8px",
//             textDecoration: "none",
//             "&:hover": {
//               backgroundColor: "#115293", // צבע רקע כהה יותר במעבר עכבר
//             },
//           }}
//           component={NavLink}
//           to="/Casualty_regions"
//           style={{
//             color: "white",
//             textDecoration: "none",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         >
//           שאלה 1
//         </Box>
//       </Stack>
//     </>
//   );
// };
