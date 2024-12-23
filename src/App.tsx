import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Box, Container } from "@mui/material";
import { Layout } from "./componnets/layout/Layout";
import { AppRouter } from "./router/AppRouter";
import { DeadliestAttack } from "./pages/deadliest-attack/DeadliestAttack";
import { Casualty_regions } from "./pages/casualty_regions/Casualty_regions";

function App() {
  return (
    <>
      <Layout children={<DeadliestAttack />} />
    </>
  );
}

export default App;
