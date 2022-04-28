import { myProjects } from "./Projects";
import DeleteIcon from "../icons/delete.svg";

const closeBtn = document.getElementById("projectNameCloseBtn");
const addBtn = document.getElementById("projectNameDoneBtn");
const newProjectBtn = document.querySelector(".newProjectBtn");
const newProjectName = document.querySelector(".newProjectName");
const list = document.querySelector(".projectsList");
const nameInput = document.getElementById("newProjectNameInput");

/* hide and show input and buttons on new project button click */
const toggleHiddenClass = function (elOne, elTwo) {
	elOne.classList.toggle("hidden");
	elTwo.classList.toggle("hidden");
};

const clearInput = function () {
	document.getElementById("newProjectNameInput").value = "";
};

/* appends new project */
const appendProject = function (project) {
	const li = document.createElement("li");
	const spn = document.createElement("span");
	const img = new Image();
	img.setAttribute("data-id", `${project.id}`);
	spn.setAttribute("data-id", `${project.id}`);
	img.src = DeleteIcon;
	spn.textContent = `${project.name}`;
	img.alt = "Delete";
	li.appendChild(spn);
	li.appendChild(img);
	list.appendChild(li);
};

/* displays all projects */
const displayProjects = function () {
	myProjects.getList().forEach((project) => {
		appendProject(project);
	});

	list.firstChild.querySelector("img").remove(); /* removes delete button */
};

const newProjectFormDisplayHandler = function () {
	closeBtn.addEventListener("click", () => {
		toggleHiddenClass(newProjectBtn, newProjectName);
		clearInput();
		newProjectBtn.classList.add("slideIn");
	});

	addBtn.addEventListener("click", () => {
		if (!nameInput.value.trim()) {
			return;
		}
		toggleHiddenClass(newProjectBtn, newProjectName);
		clearInput();
		newProjectBtn.classList.add("slideIn");
	});

	newProjectBtn.addEventListener("click", () => {
		toggleHiddenClass(newProjectBtn, newProjectName);
	});
};

export {
	newProjectFormDisplayHandler,
	displayProjects,
	appendProject,
	toggleHiddenClass,
};
