import { useEffect, useState } from "react";
import axios from "axios"

export default function useGithub() {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");


  // useEffect(() => {
  //   const savedUser = localStorage.getItem("Git_user");
  //   const savedRepos = localStorage.getItem("Git_repos");

  //   if (savedUser && savedRepos) {
  //     setUser(JSON.parse(savedUser));
  //     setRepos(JSON.parse(savedRepos));
  //   }
  // }, []);


const handleSearch = async (username) => {
  try {
    setError("");
    setUser(null);      // Clear previous user
    setRepos([]);       // Clear previous repos

    const userResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = userResponse.data;

    const repoResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repoData = repoResponse.data;

    setUser(userData);
    setRepos(repoData);

    localStorage.setItem("Git_user", JSON.stringify(userData));
    localStorage.setItem("Git_repos", JSON.stringify(repoData));
  } catch (error) {
    setUser(null);
    setRepos([]);
    setError(error.response?.data?.message || "User is not found");
    localStorage.removeItem("Git_user");
    localStorage.removeItem("Git_repos");
  }
};
  return { user, repos, error, handleSearch };
}
