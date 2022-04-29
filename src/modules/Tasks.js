import { activeProject } from "./Projects";
import Task from "./classes/TaskCl";
import { appendTask } from "./TasksRender";

const addTaskBtn = document.getElementById("addTaskBtn");

const createTaskHandler = function () {
	addTaskBtn.addEventListener("click", () => {
		let taskInput = document.getElementById("newTaskInput").value.trim();
		let dateInput = document.getElementById("dueDateInput").value;
		let importance = document.querySelector("input[name=importance]:checked");

		const setId = () => Math.floor(Math.random() * 10 + Date.now());

		if (!taskInput || !dateInput) {
			return;
		}

		let lsTasks = JSON.parse(localStorage.getItem(activeProject.id)) || [];
		let task = new Task(setId(), taskInput, dateInput, importance.value);
		lsTasks.push(task);

		localStorage.setItem(activeProject.id, JSON.stringify(lsTasks));
		activeProject.setList(lsTasks);
		appendTask(task);
	});
};

export { createTaskHandler };
