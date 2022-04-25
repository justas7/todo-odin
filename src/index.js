import "./styles/normalize.css";
import "./styles/styles.css";

import Project from "./modules/Project.js";
import Task from "./modules/Task.js";

const prj = new Project(1, "The Odin Project");

const task1 = new Task(1, "do some studying");
prj.addNewTask(task1);
console.log(prj.getTasks());

const newProjectBtn = document.querySelector(".newProjectBtn");
const newProjectName = document.querySelector(".newProjectName");
const closeBtn = document.getElementById("projectNameCloseBtn");

newProjectBtn.addEventListener("click", () => {
  newProjectName.classList.toggle("hidden");
  newProjectBtn.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  newProjectName.classList.toggle("hidden");
  newProjectBtn.classList.toggle("hidden");
});
