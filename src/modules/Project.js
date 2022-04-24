class Project {
  tasks = [];

  constructor(id, name, dateCreated) {
    this.id = id;
    this.name = name;
    this.dateCreated = dateCreated;
  }

  addNewTask(task) {
    this.tasks.push(task);
  }
}

export default Project;
