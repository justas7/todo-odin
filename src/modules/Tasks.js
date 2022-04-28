import { activeProject } from "./Projects";
import Task from "./classes/TaskCl";
import { appendTask } from "./TasksDisplay";

const addTaskBtn = document.getElementById("addTaskBtn");

const createTaskHandler = function () {
	addTaskBtn.addEventListener("click", () => {
		let taskInput = document.getElementById("newTaskInput").value.trim();
		let dateInput = document.getElementById("dueDateInput").value;
		let importance = document.querySelector(
			"input[name=importance]:checked"
		).value;

		const setId = () => Math.floor(Math.random() * 10 + Date.now());
		let task = new Task(setId(), taskInput, dateInput, importance);

		if (!taskInput || !dateInput) {
			return;
		}

		activeProject.setNewItem(task);
		appendTask(task);
	});
};

export { createTaskHandler };
