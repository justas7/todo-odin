import "./styles/normalize.css";
import "./styles/styles.css";

// import ProjectCl from "./modules/classes/ProjectCl.js";
// import TaskCl from "./modules/classes/TaskCl.js";

import { projects, createProjectHandler } from "./modules/ProjectCreate";
import { projectsDisplayHandler, displayProjects } from "./modules/ProjectsDisplay";

createProjectHandler();
projectsDisplayHandler();
displayProjects();
