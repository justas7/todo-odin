import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendNewProjcet } from "./ProjectsDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectName");

const myProjects = new List();

let projectsList; /* list for  getting localstorage values */

if (!localStorage.getItem("projectsList")) {
  myProjects.setNewItem(new Project(0, "Default")); /* create starting project */
  localStorage.setItem("projectsList", JSON.stringify(myProjects.getList()));
}
projectsList = JSON.parse(localStorage.getItem("projectsList"));
myProjects.setList(projectsList);

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
    projectsList.push(project);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    myProjects.setList(projectsList);
    appendNewProjcet(project.name);
  });
};

export { myProjects, createProjectHandler };
