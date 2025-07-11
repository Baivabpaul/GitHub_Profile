import React, { useState } from "react";
import Searchuser from "../Component/Searchuser/searchuser";
import UserProfile from "../Component/userProfile/userprofile";
import RepoList from "../Component/Repositary/userRepo";
import useGithub from "../Component/Hooks/usegithub";
import { Box, Button, Typography, Container } from "@mui/material";

export default function Header() {
  const { user, repos, error, handleSearch } = useGithub();
  const [isGrid, setIsGrid] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  const handleUserSearch = async (username) => {
    await handleSearch(username);
    setHasSearched(true);
  };

  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 4 }, py: 3 }}>
      {/* Search Bar */}
      <Searchuser onSearch={handleUserSearch} />

      {/* Error Message */}
      {hasSearched && error && (
        <Typography
          variant="body1"
          sx={{
            color: "red",
            textAlign: "center",
            mt: 2,
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          {error}
        </Typography>
      )}

      {/* User Profile */}
      {hasSearched && user && <UserProfile user={user} />}

      {/* Repo Section */}
      {hasSearched && repos.length > 0 && (
        <>
          {/* Toggle View Button */}
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setIsGrid(!isGrid)}
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                paddingX: 2,
                paddingY: 0.5,
              }}
            >
              {isGrid ? "Switch to List View" : "Switch to Grid View"}
            </Button>
          </Box>

          {/* Repositories Display */}
          <Box
            sx={{
              backgroundColor: isGrid ? "black" : "orange",
              padding: { xs: 2, sm: 3 },
              borderRadius: 2,
              transition: "background-color 0.3s ease",
              overflowX: "auto",
            }}
          >
            <RepoList repos={repos} isGrid={isGrid} />
          </Box>
        </>
      )}
    </Container>
  );
}
