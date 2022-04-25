import "./styles/normalize.css";
import "./styles/styles.css";

import Project from "./modules/classes/ProjectCl.js";
// import Task from "./modules/classes/TaskCl.js";

import { myProjects, createProjectHandler } from "./modules/ProjectCreate";
import { projectsDisplayHandler, displayProjects } from "./modules/ProjectsDisplay";

const defaultProject = new Project(0, "Default");

myProjects.setNewItem(defaultProject);

createProjectHandler();
projectsDisplayHandler();
displayProjects();
