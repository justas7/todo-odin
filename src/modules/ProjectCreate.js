import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendProjcet } from "./ProjectsDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectNameInput");

const myProjects = new List();

let projectsList; /* variable for keeping localstorage values */

if (!localStorage.getItem("projectsList")) {
  myProjects.setNewItem(new Project(0, "My ToDo List"));
  localStorage.setItem("projectsList", JSON.stringify(myProjects.getList()));
}
projectsList = JSON.parse(localStorage.getItem("projectsList"));
myProjects.setList(projectsList);

const createProjectHandler = function () {
  let id = 1;
  let project;

  addBtn.addEventListener("click", function () {
    project = new Project(id, nameInput.value);
    id++;
  });

  addBtn.addEventListener("click", function () {
    projectsList.push(project);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    myProjects.setList(projectsList);

    appendProjcet(project);
  });
};

export { myProjects, createProjectHandler };
