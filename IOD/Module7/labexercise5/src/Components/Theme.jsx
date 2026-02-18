import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    fontFamily: "Great Vibes",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#157a0aff",
      main: "#28a13cff",
      dark: "#ba000d",
      contrastText: "#000",
    },
    typography: {
      fontFamily: "Comic  Sans MS",
      fontSize: 14,
      h1: { fontSize: 30 },
    },
  },
});
