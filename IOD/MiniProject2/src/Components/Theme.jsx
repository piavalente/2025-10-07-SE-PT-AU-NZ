// theme.js
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: "Arial",
    fontSize: 14,
    h1: { fontSize: 30 },
    h2: { fontSize: 24 },
    h3: { fontSize: 14 },
    body1: { fontSize: 14 },
  },
  palette: {
    primary: {
      light: "#396e23ff",
      main: "#2A6D0D",
      dark: "#245c0cff",
      contrastText: "#fff",
    }
  },
});




