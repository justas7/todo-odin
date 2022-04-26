import { myProjects } from "./ProjectCreate";
import DeleteIcon from "../icons/delete.svg";

const closeBtn = document.getElementById("projectNameCloseBtn");
const addBtn = document.getElementById("projectNameDoneBtn");
const newProjectBtn = document.querySelector(".newProjectBtn");
const newProjectName = document.querySelector(".newProjectName");
const list = document.querySelector(".projectsList");

/* hide and show input and buttons on new project button click */
const toggleHiddenClass = function () {
  newProjectName.classList.toggle("hidden");
  newProjectBtn.classList.toggle("hidden");
};

const clearInput = function () {
  document.getElementById("newProjectNameInput").value = "";
};

/* appends new project */
const appendProjcet = function (project) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const spn = document.createElement("span");
  const img = new Image();
  img.src = DeleteIcon;
  spn.textContent = `${project.name}`;
  btn.alt = "Delete";
  btn.appendChild(img);
  li.appendChild(spn);
  li.appendChild(btn);
  list.appendChild(li);
};

/* displays all projects */
const displayProjects = function () {
  myProjects.getList().forEach((project) => {
    appendProjcet(project);
  });

  list.firstChild.querySelector("button").remove();
};

const projectsDisplayHandler = function () {
  closeBtn.addEventListener("click", () => {
    toggleHiddenClass();
    clearInput();
    newProjectBtn.classList.add("slideIn");
  });

  addBtn.addEventListener("click", () => {
    toggleHiddenClass();
    clearInput();
    newProjectBtn.classList.add("slideIn");
  });

  newProjectBtn.addEventListener("click", () => {
    toggleHiddenClass();
  });
};

export { projectsDisplayHandler, displayProjects, appendProjcet };
