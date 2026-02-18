import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { NavLink } from "react-router-dom";
import "../Index.css";

export default function ButtonAppBar() {
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Login", path: "/Login" },
    { title: "Bitcoin Rates", path: "/BitcoinRates" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          {navLinks.map ((link) => (
            <Button 
                key = {link.title}
                color = "inherit"
                component = {NavLink}
                to = {link.path}
                sx = {{
                    "&.active": { fontWeight: "bold", textDecoration: "underline" },
                }}
            >
                {link.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
