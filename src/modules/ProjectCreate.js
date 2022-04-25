import ProjectCl from "./classes/ProjectCl";
import ListCl from "./classes/ListCl";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectName");

let name;
let id = 0;
const projects = new ListCl();

/* create new project object and add it to the list */
const getInput = function () {
  name = nameInput.value;
  id -= 1;
};

let project = new ProjectCl(id, name);

const addProjectToList = function () {
  projects.setNewItem(project);
  console.log(projects);
};

const createProjectHandler = function () {
  addBtn.addEventListener("click", getInput);

  addBtn.addEventListener("click", addProjectToList);
};

export { projects, createProjectHandler };
