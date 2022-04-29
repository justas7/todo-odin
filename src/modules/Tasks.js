import Task from './classes/TaskCl';

const addTaskBtn = document.getElementById('addTaskBtn');

const createTaskHandler = function createTaskHandler() {
  addTaskBtn.addEventListener('click', () => {
    const taskInput = document.getElementById('newTaskInput').value.trim();
    const dateInput = document.getElementById('dueDateInput').value;
    const importance = document.querySelector('input[name=importance]:checked');
    const activeProjectId = document
      .querySelector('.active')
      .firstChild.getAttribute('data-id');

    const setId = () => Math.floor(Math.random() * 10 + Date.now());

    // if (!taskInput || !dateInput) {
    //   return;
    // }

    const lsTasks = JSON.parse(localStorage.getItem(activeProjectId)) || [];
    const task = new Task(setId(), taskInput, dateInput, importance.value);
    lsTasks.push(task);
    console.log(lsTasks);
    localStorage.setItem(`${activeProjectId}`, JSON.stringify(lsTasks));
  });
};

export default createTaskHandler;
