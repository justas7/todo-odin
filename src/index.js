import "./styles/normalize.css";
import "./styles/styles.css";

import { newProjectFormDisplayHandler, displayProjects } from "./modules/ProjectsDisplay";
import { getActiveProject, createProjectHandler, deleteProjectHandler } from "./modules/Projects";
import { newTaskFormDisplayHandler } from "./modules/TasksDisplay";

displayProjects();
deleteProjectHandler();
createProjectHandler();
newProjectFormDisplayHandler();
newTaskFormDisplayHandler();
let activeProject = getActiveProject();

console.log(activeProject);
