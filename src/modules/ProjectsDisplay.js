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

/* display all projects */
const displayProjects = function () {
  const li = document.createElement("li");
  li.textContent = `${myProjects.getList()[0].name}`;
  list.appendChild(li);

  myProjects.getList().forEach((project) => {
    if (project.id !== myProjects.getList()[0].id) {
      let li = document.createElement("li");
      li.textContent = `${project.name}`;
      list.appendChild(li);
    }
  });
};

/* appends new project after creating it in ProjectCreate.js */
const appendNewProjcet = function (project) {
  let li = document.createElement("li");
  li.textContent = `${project}`;
  list.appendChild(li);
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

export { projectsDisplayHandler, displayProjects, appendNewProjcet };
