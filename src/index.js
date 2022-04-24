import "./styles/normalize.css";

import Project from "./modules/Project.js";
import Task from "./modules/Task.js";

const prj = new Project(1, "The Odin Project");
const prj2 = new Project(2, "Do not watch tv");

const task1 = new Task(1, "do some studying");
prj.addNewTask(task1);
console.log(prj);
console.log(prj2);
