import Task from './classes/TaskCl';
import List from './classes/ListCl';

const addTaskBtn = document.getElementById('addTaskBtn');
const tbody = document.querySelector('tbody');

const createNewTask = function createNewTask() {
  const activeProjectId = document
    .querySelector('.active')
    .firstChild.getAttribute('data-id');
  const taskInput = document.getElementById('newTaskInput').value.trim();
  const dateInput = document.getElementById('dueDateInput').value;
  const importance = document.querySelector('input[name=importance]:checked');

  const setId = () => Math.floor(Math.random() * 10 + Date.now());

  if (!taskInput || !dateInput) {
    return;
  }

  const lsTasks = JSON.parse(localStorage.getItem(activeProjectId)) || [];
  const task = new Task(setId(), taskInput, dateInput, importance.value);
  lsTasks.push(task);
  localStorage.setItem(`${activeProjectId}`, JSON.stringify(lsTasks));
};

const taskIsCompleted = function taskIsCompleted(e) {
  const activeProjectId = document
    .querySelector('.active')
    .firstChild.getAttribute('data-id');
  const lsTasks = new List();
  lsTasks.setList(JSON.parse(localStorage.getItem(activeProjectId)));

  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const row = tbody.querySelector(`tr[data-id="${e.target.dataset.id}"]`);
    row.querySelector('input[type=checkbox').remove();
    lsTasks.removeItem(
      lsTasks.getList().find((task) => task.id === Number(e.target.dataset.id))
    );

    localStorage.setItem(
      `${activeProjectId}`,
      JSON.stringify(lsTasks.getList())
    );
  }
};

const createTaskHandler = function createTaskHandler() {
  addTaskBtn.addEventListener('click', createNewTask);

  tbody.addEventListener('click', taskIsCompleted);
};

export default createTaskHandler;
