import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LoginForm from "./LoginForm";
import HomeContent from "./HomeContent";

function HomeCards() {
  return (
    <Stack direction="row" spacing={2} sx={{ height: "75vh", ml: 4, mr: 4 }}>
      {/* Left Section*/}
      <Box
        sx={{
          flex: 1,
          bgcolor: "rgba(255, 255, 255, 0.5)",
          border: "solid",
          borderRadius: "20px",
          borderColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginForm></LoginForm>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 2,
          bgcolor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <HomeContent></HomeContent>
      </Box>
    </Stack>
  );
}

export default HomeCards;
