import { projects } from "./ProjectCreate";

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
  projects.list.forEach((project) => {
    let li = document.createElement("li");
    li.textContent = `${project.name}`;
    list.appendChild(li);
    console.log("a");
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

  addBtn.addEventListener("click", displayProjects);

  newProjectBtn.addEventListener("click", () => {
    toggleHiddenClass();
  });
};

export { projectsDisplayHandler, displayProjects };
