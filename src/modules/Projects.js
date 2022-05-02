import Project from './classes/ProjectCl';
import List from './classes/ListCl';

const addBtn = document.getElementById('projectNameDoneBtn');
const nameInput = document.getElementById('newProjectNameInput');
const projectsList = document.getElementById('projectsList');
const myProjects = new List();
const defaultProject = new Project(0, 'My ToDo List');
// eslint-disable-next-line import/no-mutable-exports
let activeProject = defaultProject;
activeProject.setList(JSON.parse(localStorage.getItem(activeProject.id)));

/* creates new default project if it doesnt exist and adds to local storage */
if (!localStorage.getItem('projectsList')) {
  myProjects.setNewItem(defaultProject);
  localStorage.setItem('projectsList', JSON.stringify(myProjects.getList()));
}
let lsProjectsList = JSON.parse(
  localStorage.getItem('projectsList')
); /* variable for keeping localstorage values */

myProjects.setList(lsProjectsList);

const setActiveProject = function setActiveProject() {
  projectsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
      const id = Number(e.target.getAttribute('data-id'));
      const project = myProjects.getList().find((prj) => prj.id === id);
      activeProject = new Project(project.id, project.name);
      activeProject.setList(JSON.parse(localStorage.getItem(project.id)));
    }
  });
};

const deleteProjectHandler = function deleteProjectHandler() {
  projectsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && e.target.getAttribute('data-id')) {
      const id = Number(e.target.getAttribute('data-id'));
      const removedProject = myProjects
        .getList()
        .find((project) => project.id === id);
      myProjects.removeItem(removedProject);

      if (id === activeProject.id) {
        activeProject = new Project(defaultProject.id, defaultProject.name);
        activeProject.setList(
          JSON.parse(localStorage.getItem(activeProject.id))
        );
      }
      localStorage.setItem(
        'projectsList',
        JSON.stringify(myProjects.getList())
      );
      /* removes project from projects list and its tasks from local storage */

      localStorage.removeItem(id);
      lsProjectsList = lsProjectsList.filter((project) => project.id !== id);
    }
  });
};

const createProjectHandler = function createProjectHandler() {
  const setId = () => Math.floor(Math.random() * 10 + Date.now());

  addBtn.addEventListener('click', () => {
    if (!nameInput.value.trim()) {
      return;
    }

    activeProject = new Project(setId(), nameInput.value);
    lsProjectsList.push(activeProject);
    localStorage.setItem('projectsList', JSON.stringify(lsProjectsList));
    myProjects.setList(lsProjectsList);
  });
};

export { createProjectHandler, deleteProjectHandler, setActiveProject };
