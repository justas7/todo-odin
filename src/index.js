import "./styles/normalize.css";
import "./styles/styles.css";

import {
	newProjectFormDisplayHandler,
	displayProjects,
} from "./modules/ProjectsDisplay";

import {
	setActiveProject,
	createProjectHandler,
	deleteProjectHandler,
	activeProject,
} from "./modules/Projects";

import {
	newTaskFormDisplayHandler,
	displayTasks,
} from "./modules/TasksDisplay";
import { createTaskHandler } from "./modules/Tasks";

console.log(activeProject);

displayProjects();
deleteProjectHandler();
createProjectHandler();

displayTasks();
createTaskHandler();
newProjectFormDisplayHandler();
newTaskFormDisplayHandler();
setActiveProject();
