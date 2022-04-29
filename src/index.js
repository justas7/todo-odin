import "./styles/normalize.css";
import "./styles/styles.css";

import {
	newProjectFormDisplayHandler,
	displayProjects,
} from "./modules/ProjectsRender";

import {
	setActiveProject,
	createProjectHandler,
	deleteProjectHandler,
	activeProject,
} from "./modules/Projects";

import { newTaskFormDisplayHandler, displayTasks } from "./modules/TasksRender";
import { createTaskHandler } from "./modules/Tasks";

displayProjects();
deleteProjectHandler();
createProjectHandler();
setActiveProject();
newProjectFormDisplayHandler();
createTaskHandler();
displayTasks();

newTaskFormDisplayHandler();

console.log(activeProject.getList());
