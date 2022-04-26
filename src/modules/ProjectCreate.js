import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendProjcet } from "./ProjectsDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectNameInput");

const myProjects = new List();

let projectsList; /* list for  getting localstorage values */

if (!localStorage.getItem("projectsList")) {
  myProjects.setNewItem(new Project(0, "Default"));
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
    console.log(myProjects);

    appendProjcet(project);
  });
};

export { myProjects, createProjectHandler };
