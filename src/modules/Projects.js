import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendProjcet, displayProjects } from "./ProjectsDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectNameInput");
const list = document.querySelector(".projectsList");
const myProjects = new List();

let projectsList; /* variable for keeping localstorage values */

/* creates new default project if it doesnt exist and adds to local storage */
if (!localStorage.getItem("projectsList")) {
  myProjects.setNewItem(new Project(0, "My ToDo List"));
  localStorage.setItem("projectsList", JSON.stringify(myProjects.getList()));
}
projectsList = JSON.parse(localStorage.getItem("projectsList"));
myProjects.setList(projectsList);

const deleteProjectHandler = function () {
  list.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.getAttribute("data-id")) {
      const id = Number(e.target.getAttribute("data-id"));
      myProjects.removeItem(myProjects.getList().find((project) => project.id == id));
      localStorage.setItem("projectsList", JSON.stringify(myProjects.getList()));
      e.target.parentElement.remove();
      projectsList = projectsList.filter((project) => project.id !== id);
    }
  });
};

const createProjectHandler = function () {
  let project;
  const randomNumb = () => Math.floor(Math.random() * 10 + Date.now());

  addBtn.addEventListener("click", function () {
    if (!nameInput.value) {
      return;
    }
    let id = randomNumb();
    project = new Project(id, nameInput.value);

    projectsList.push(project);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    myProjects.setList(projectsList);
    appendProjcet(project);
  });
};

export { myProjects, createProjectHandler, deleteProjectHandler };
