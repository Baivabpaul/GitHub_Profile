import React, { useState } from "react";
import Searchuser from "../Component/Searchuser/searchuser";
import UserProfile from "../Component/userProfile/userprofile";
import RepoList from "../Component/Repositary/userRepo";
import useGithub from "../Component/Hooks/usegithub";

export default function Header() {
  const { user, repos, error, handleSearch } = useGithub();
  const [isGrid, setIsGrid] = useState(true);
  const [hasSearched, setHasSearched] = useState(false); 

  const handleUserSearch = async (username) => {
    await handleSearch(username);
    setHasSearched(true); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <Searchuser onSearch={handleUserSearch} />

      {hasSearched && error && (
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
      )}

      {hasSearched && user && <UserProfile user={user} />}

      {hasSearched && repos.length > 0 && (
        <>
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <button onClick={() => setIsGrid(!isGrid)}>
              {isGrid ? "Switch to List View" : "Switch to Grid View"}
            </button>
          </div>

          <div
            style={{
              backgroundColor: isGrid ? "black" : "orange",
              padding: "20px",
              borderRadius: "10px",
              transition: "background-color 0.3s ease",
            }}
          >
            <RepoList repos={repos} isGrid={isGrid} />
          </div>
        </>
      )}
    </div>
  );
}

