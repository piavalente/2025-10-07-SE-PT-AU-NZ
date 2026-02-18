import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import NavBar from "./Components/NavBar";
import { UserProvider } from "./Context/UserProvider";
import { ThemeProvider } from "@emotion/react";
import { tealTheme } from "./Components/TealTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/*REMOVE all this as it is in the NavBar<span><a href = "/About">About</a></span>{" "}
        <span><a href = "/Contact">Contact</a></span>{" "}
        <span><a href = "/">Home</a></span>{" "}
        <span><a href = "/Dash">Dashboard</a></span>{" "}*/}

        <UserProvider>
          <ThemeProvider theme = {tealTheme}>
            <NavBar></NavBar>
            <AppRoutes></AppRoutes>
          </ThemeProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
