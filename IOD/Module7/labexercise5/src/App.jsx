import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import NavBar from "./Components/NavBar";
import NavBar2 from "./Components/NavBar2";
import { UserProvider } from "../../advancedreact/src/Context/UserProvider";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./Components/Theme";

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider theme = {Theme}>
          <NavBar2></NavBar2>
          {/*<NavBar></NavBar>*/}
          <AppRoutes></AppRoutes>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
