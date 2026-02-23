import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";
import { UserProvider } from "../../Module7/advancedreact/src/Context/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./Components/Theme";

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider theme = {Theme}>
          <Logo></Logo>
          <Navbar></Navbar>
          <AppRoutes></AppRoutes>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
