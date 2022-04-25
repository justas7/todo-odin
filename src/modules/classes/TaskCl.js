class Task {
  isCompleted = false;

  constructor(id, task, taskDate, dateCreated) {
    this.id = id;
    this.task = task;
    this.taskDate = taskDate;
    this.dateCreated = dateCreated;
  }

  taskCompleted() {
    this.isCompleted = true;
  }
}

export default Task;
