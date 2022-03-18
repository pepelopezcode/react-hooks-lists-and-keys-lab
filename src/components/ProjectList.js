import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem name={projects[0].name} id={projects[0].id} about={projects[0].about} technologies={projects[0].technologies} />
        <ProjectItem name={projects[1].name} id={projects[1].id} about={projects[1].about} technologies={projects[1].technologies} />
        <ProjectItem name={projects[2].name} id={projects[2].id} about={projects[2].about} technologies={projects[2].technologies} />
      </div>
    </div>
  );
}

export default ProjectList;
