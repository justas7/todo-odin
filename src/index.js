import './styles/normalize.css';
import './styles/styles.css';

import { projectsRenderHandler, tasksRenderHandler } from './modules/Render';

import {
  setActiveProject,
  createProjectHandler,
  deleteProjectHandler
} from './modules/Projects';

import createTaskHandler from './modules/Tasks';

setActiveProject();
deleteProjectHandler();
createProjectHandler();
createTaskHandler();
projectsRenderHandler();
tasksRenderHandler();
