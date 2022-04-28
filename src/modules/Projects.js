import Project from "./classes/ProjectCl";
import List from "./classes/ListCl";
import { appendProject } from "./ProjectsDisplay";
import { displayTasks } from "./TasksDisplay";

const addBtn = document.getElementById("projectNameDoneBtn");
const nameInput = document.getElementById("newProjectNameInput");
const list = document.querySelector(".projectsList");
const myProjects = new List(); /* has default project */
const defaultProject = new Project(0, "My ToDo List");
let activeProject = defaultProject;

/* creates new default project if it doesnt exist and adds to local storage */
if (!localStorage.getItem("projectsList")) {
	myProjects.setNewItem(defaultProject);
	localStorage.setItem("projectsList", JSON.stringify(myProjects.getList()));
}
let lsProjectsList = JSON.parse(
	localStorage.getItem("projectsList")
); /* variable for keeping localstorage values */

myProjects.setList(lsProjectsList);

const setActiveProject = function () {
	list.firstChild.classList.add("active");

	list.addEventListener("click", (e) => {
		const id = Number(e.target.getAttribute("data-id"));

		if (e.target.tagName === "SPAN") {
			[...list.children].forEach((list) => list.classList.remove("active"));
			let project = myProjects.getList().find((project) => project.id == id);

			activeProject = new Project(project.id, project.name);
			console.log(displayTasks());
			displayTasks();
			e.target.parentNode.classList.add("active");
		}
	});
};

const deleteProjectHandler = function () {
	list.addEventListener("click", function (e) {
		if (e.target.tagName === "IMG" && e.target.getAttribute("data-id")) {
			const id = Number(e.target.getAttribute("data-id"));
			const removedProject = myProjects
				.getList()
				.find((project) => project.id == id);
			myProjects.removeItem(removedProject);

			if (id === activeProject.id) {
				activeProject = new Project(defaultProject.id, defaultProject.name);
				list.children[0].classList.add("active");
			}
			localStorage.setItem(
				"projectsList",
				JSON.stringify(myProjects.getList())
			);
			e.target.parentElement.remove();
			lsProjectsList = lsProjectsList.filter((project) => project.id !== id);
		}
	});
};

const createProjectHandler = function () {
	let project;
	const setId = () => Math.floor(Math.random() * 10 + Date.now());

	addBtn.addEventListener("click", function () {
		if (!nameInput.value.trim()) {
			return;
		}

		project = new Project(setId(), nameInput.value);

		lsProjectsList.push(project);
		localStorage.setItem("projectsList", JSON.stringify(lsProjectsList));
		myProjects.setList(lsProjectsList);
		appendProject(project);
	});
};

export {
	myProjects,
	createProjectHandler,
	deleteProjectHandler,
	setActiveProject,
	activeProject,
};
