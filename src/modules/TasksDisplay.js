import { toggleHiddenClass } from "./ProjectsDisplay"; /* from projectsDisplay.js */
import { activeProject } from "./Projects";

const newTaskBtn = document.querySelector("button[class='newTaskBtn']");
const newTaskBtnRow = document.getElementById("newTask");
const newTaskForm = document.querySelector(".taskForm");
const addTaskBtn = document.getElementById("addTaskBtn");
const closeTaskFormBtn = document.getElementById("closeTaskFormBtn");
const newTaskInput = document.getElementById("newTaskInput");
const dueDate = document.getElementById("dueDateInput");
const tasksTableBody = document.querySelector("tbody");

const appendTask = function (task) {
	const tr = document.createElement("tr");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	const td1 = document.createElement("td");
	td1.appendChild(checkbox);
	tr.appendChild(td1);
	const td2 = document.createElement("td");
	td2.textContent = `${task.task}`;
	tr.appendChild(td2);
	const td3 = document.createElement("td");
	td3.textContent = `${task.dueDate}`;
	tr.appendChild(td3);
	const td4 = document.createElement("td");
	td4.textContent = `${task.importance}`;
	tr.appendChild(td4);

	tasksTableBody.appendChild(tr);
};

const displayTasks = function () {
	activeProject.getList().forEach((task) => {
		appendTask(task);
	});
};

const newTaskFormDisplayHandler = function () {
	newTaskBtn.addEventListener("click", () =>
		toggleHiddenClass(newTaskBtnRow, newTaskForm)
	);

	addTaskBtn.addEventListener("click", () => {
		if (newTaskInput.value.trim() && dueDate.value) {
			toggleHiddenClass(newTaskBtnRow, newTaskForm);
			newTaskInput.value = "";
			dueDate.value = "";
		}
	});

	closeTaskFormBtn.addEventListener("click", () => {
		toggleHiddenClass(newTaskBtnRow, newTaskForm);
		newTaskInput.value = "";
		dueDate.value = "";
	});
};

export { newTaskFormDisplayHandler, appendTask, displayTasks };
