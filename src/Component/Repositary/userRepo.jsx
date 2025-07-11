import React from "react";
import "./repostyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function RepoList({ repos, isGrid }) {
  return (
    <div className={isGrid ? "grid-container" : "list-container"}>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description provided."}</p><br />
          <span> ⭐ {repo.stargazers_count}</span>&nbsp;&nbsp;
          <FontAwesomeIcon icon={faCodeBranch} className="icon" />
          <span>{repo.forks_count}</span>
        </div>
      ))}
    </div>
  );
} 