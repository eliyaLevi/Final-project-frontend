import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Box, Container } from "@mui/material";
import { Layout } from "./componnets/layout/Layout";
import { AppRouter } from "./router/AppRouter";
import { DeadliestAttack } from "./pages/deadliest-attack/DeadliestAttack";
import { Casualty_regions } from "./pages/casualty_regions/Casualty_regions";
import { Incident_trends } from "./pages/incident-trends/Incident_trends";
import { HomePage } from "./pages/home-page/HomePage";

function App() {
  return (
    <>
      <Layout children={<AppRouter />} />
    </>
  );
}

export default App;
