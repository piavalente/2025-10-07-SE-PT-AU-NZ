import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, ml: 4, mr: 4}}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <Button color="black" component={NavLink} to ="/" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Home</Button>
            <Button color="inherit" component={NavLink} to ="/Community" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Community</Button>
            <Button color="inherit" component={NavLink} to ="/Programs" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Programs</Button>
            <Button color="inherit" component={NavLink} to ="/OnlineCoaching" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Online Coaching</Button>
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography> {/*Spacer*/}

            {/* Icons */}
            <IconButton size="large" edge="start" color="inherit" aria-label="instagram" sx={{ mr: 1 }}><InstagramIcon></InstagramIcon></IconButton>
            <IconButton size="large" edge="start" color="inherit" aria-label="youtube" sx={{ mr: 1 }}><YouTubeIcon></YouTubeIcon></IconButton>
            
            <Button color="inherit" component={NavLink} to ="/Login" style={({ isActive }) => ({fontWeight: isActive ? "bold" : "normal"})}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
