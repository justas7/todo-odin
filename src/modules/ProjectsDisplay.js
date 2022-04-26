import { myProjects } from "./ProjectCreate";

const closeBtn = document.getElementById("projectNameCloseBtn");
const addBtn = document.getElementById("projectNameDoneBtn");
const newProjectBtn = document.querySelector(".newProjectBtn");
const newProjectName = document.querySelector(".newProjectName");
const list = document.querySelector(".projectsList");

/* hide and show elements on button click */
const toggleHiddenClass = function () {
  newProjectName.classList.toggle("hidden");
  newProjectBtn.classList.toggle("hidden");
};

const clearInput = function () {
  newProjectName.textContent = "";
};

/* appends new project */
const appendProjcet = function (project) {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const spn = document.createElement("span");
  spn.textContent = `${project.name}`;
  btn.textContent = "Delete";
  li.appendChild(spn);
  li.appendChild(btn);
  list.appendChild(li);
};

/* displays all projects */
const displayProjects = function () {
  myProjects.getList().forEach((project) => {
    appendProjcet(project);
  });
};

const projectsDisplayHandler = function () {
  closeBtn.addEventListener("click", () => {
    toggleHiddenClass();
    newProjectBtn.classList.add("slideIn");
  });

  addBtn.addEventListener("click", () => {
    toggleHiddenClass();
    newProjectBtn.classList.add("slideIn");
  });

  newProjectBtn.addEventListener("click", () => {
    toggleHiddenClass();
  });
};

export { projectsDisplayHandler, displayProjects, appendProjcet };
