import { toggleHiddenClass } from "./ProjectsDisplay"; /* from projectsDisplay.js */

const newTaskBtn = document.querySelector("button[class='newTaskBtn']");
const newTaskBtnRow = document.getElementById("newTask");
const newTaskFormRow = document.getElementById("newTaskForm");

const newTaskFormDisplayHandler = function () {
  newTaskBtn.addEventListener("click", function () {
    toggleHiddenClass(newTaskBtnRow, newTaskFormRow);
  });
};

export { newTaskFormDisplayHandler };
