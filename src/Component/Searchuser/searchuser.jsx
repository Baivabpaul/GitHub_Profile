import React, { useState } from "react";
import { AppBar, Toolbar, TextField, Button, Box, Typography } from "@mui/material";

export default function Searchuser({ onSearch }) {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData.trim() !== "") {
      onSearch(inputData.trim());
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#24292e", mb: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          px: 2,
          py: 1,
        }}
      >
        <Typography variant="h6" sx={{ color: "white" }}>
          Git_Profile
        </Typography>


        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth={true}
            size="small"
            placeholder="Enter username"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: { xs: "100%", sm: "auto" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#2da44e",
              "&:hover": { backgroundColor: "#218739" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Search
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
