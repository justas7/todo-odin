import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendNewProjcet } from "./ProjectsDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectName");

const myProjects = new List();

const createProjectHandler = function () {
  let name = "a";
  let id = 1;
  let project;

  addBtn.addEventListener("click", function () {
    name = nameInput.value;
    project = new Project(id, name);
    id++;
  });

  addBtn.addEventListener("click", function () {
    myProjects.setNewItem(project);
    appendNewProjcet(project.name);
  });
};

export { myProjects, createProjectHandler };
