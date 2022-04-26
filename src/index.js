import "./styles/normalize.css";
import "./styles/styles.css";

import Project from "./modules/classes/ProjectCl.js";
// import Task from "./modules/classes/TaskCl.js";

import { newProjectFormDisplayHandler, displayProjects } from "./modules/ProjectsDisplay";
import { myProjects, createProjectHandler, deleteProjectHandler } from "./modules/Projects";

displayProjects();

deleteProjectHandler();
createProjectHandler();
newProjectFormDisplayHandler();
