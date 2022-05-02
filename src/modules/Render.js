import DeleteIcon from '../icons/delete.svg';

const closeNewProjectFormBtn = document.getElementById('projectNameCloseBtn');
const addNewProjectBtn = document.getElementById('projectNameDoneBtn');
const newProjectBtn = document.querySelector('.newProjectBtn');
const newProjectName = document.querySelector('.newProjectName');
const newProjectNameInput = document.getElementById('newProjectNameInput');
const newTaskBtn = document.querySelector("button[class='newTaskBtn']");
const newTaskBtnRow = document.getElementById('newTask');
const newTaskForm = document.querySelector('.taskForm');
const addTaskBtn = document.getElementById('addTaskBtn');
const closeTaskFormBtn = document.getElementById('closeTaskFormBtn');
const newTaskInput = document.getElementById('newTaskInput');
const dueDate = document.getElementById('dueDateInput');
const projectsList = document.getElementById('projectsList');
const tasksTableBody = document.querySelector('tbody');

/* hide and show input and buttons on new project button click */
const toggleHiddenClass = function toggleHiddenClass(elOne, elTwo) {
  elOne.classList.toggle('hidden');
  elTwo.classList.toggle('hidden');
};

const clearInput = function clearInput() {
  document.getElementById('newProjectNameInput').value = '';
};

const removeChildElements = function removeChildElements(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

/* appends new project */
const appendProject = function appendProject(project) {
  const li = document.createElement('li');
  const spn = document.createElement('span');
  const img = new Image();
  img.setAttribute('data-id', `${project.id}`);
  spn.setAttribute('data-id', `${project.id}`);
  img.src = DeleteIcon;
  spn.textContent = `${project.name}`;
  img.alt = 'Delete';
  li.appendChild(spn);
  li.appendChild(img);
  projectsList.appendChild(li);
};

/* displays all projects */
const displayProjects = function displayProjects() {
  removeChildElements(projectsList);
  JSON.parse(localStorage.getItem('projectsList')).forEach((project) => {
    appendProject(project);
  });

  /* removes delete button from default project */
  projectsList.firstChild.querySelector('img').remove();
};

const appendTask = function appendTask(task) {
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', task.id);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', task.id);
  const td1 = document.createElement('td');
  td1.appendChild(checkbox);
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  td2.textContent = `${task.task}`;
  tr.appendChild(td2);
  const td3 = document.createElement('td');
  td3.textContent = `${task.dueDate}`;
  tr.appendChild(td3);
  const td4 = document.createElement('td');
  td4.textContent = `${task.importance}`;
  tr.appendChild(td4);

  tasksTableBody.appendChild(tr);
};

const displayTasks = function displayTasks() {
  removeChildElements(tasksTableBody);
  const id = projectsList
    .querySelector('.active')
    .firstChild.getAttribute('data-id');
  if (localStorage.getItem(id)) {
    JSON.parse(localStorage.getItem(id)).forEach((task) => {
      appendTask(task);
    });
  }
};

const taskIsCompleted = function taskIsCompleted(e) {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    displayTasks();
  }
};

const projectsRenderHandler = function projectsRenderHandler() {
  displayProjects();
  projectsList.firstChild.classList.add('active');
  closeNewProjectFormBtn.addEventListener('click', () => {
    toggleHiddenClass(newProjectBtn, newProjectName);
    clearInput();
    newProjectBtn.classList.add('slideIn');
  });

  addNewProjectBtn.addEventListener('click', () => {
    if (!newProjectNameInput.value.trim()) {
      return;
    }
    toggleHiddenClass(newProjectBtn, newProjectName);
    clearInput();
    newProjectBtn.classList.add('slideIn');
    displayProjects();
    projectsList.lastChild.classList.add('active');
  });

  newProjectBtn.addEventListener('click', () => {
    toggleHiddenClass(newProjectBtn, newProjectName);
  });

  /* removes deleted projects element */
  projectsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.getAttribute('data-id')) {
      if (e.target.parentElement.classList.contains('active')) {
        projectsList.children[0].classList.add('active');
        displayTasks();
      }
      e.target.parentElement.remove();
    }
  });

  projectsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      projectsList.querySelector('.active').classList.remove('active');
      if (newTaskBtnRow.classList.contains('hidden')) {
        newTaskBtnRow.classList.remove('hidden');
        newTaskForm.classList.add('hidden');
        newTaskInput.value = '';
        dueDate.value = '';
      }

      e.target.parentElement.classList.add('active');
      displayTasks();
    }
  });
};

const tasksRenderHandler = function tasksRenderHandler() {
  displayTasks();
  newTaskBtn.addEventListener('click', () => {
    toggleHiddenClass(newTaskBtnRow, newTaskForm);
  });

  addTaskBtn.addEventListener('click', () => {
    if (newTaskInput.value.trim() && dueDate.value) {
      toggleHiddenClass(newTaskBtnRow, newTaskForm);
      newTaskInput.value = '';
      dueDate.value = '';
      displayTasks();
    }
  });

  closeTaskFormBtn.addEventListener('click', () => {
    toggleHiddenClass(newTaskBtnRow, newTaskForm);
    newTaskInput.value = '';
    dueDate.value = '';
  });

  tasksTableBody.addEventListener('click', taskIsCompleted);
};

export { projectsRenderHandler, tasksRenderHandler, appendTask };
