import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    let valid = true;

    // Basic validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      console.log({ email, password });
      alert("Logged in successfully!");
    }
  };

  return (
    <Card
      sx={{
        width: 300,
        margin: "auto",
        mt: 10,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "none",
      }}
    >
      <Typography variant="h5" textAlign="center">
        Log In
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          required
          fullWidth
        ></TextField>

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          required
          fullWidth
        ></TextField>

        <Button type="submit" variant="contained" fullWidth sx={{backgroundColor: "primary", color: "white"}}>
          Log in
        </Button>
        <Typography textAlign="center" sx={{ fontSize: "12px" }}>
          Not yet a member? <Link to= "./SignUp">Sign Up.</Link>
          </Typography>
      </Box>
    </Card>
  );
}

export default LoginForm;
