class Task {
  isCompleted = false;
  constructor(id, task, taskDate, dateCreated) {
    this.id = id;
    this.task = task;
    this.taskDate = taskDate;
    this.dateCreated = dateCreated;
  }
}

export default Task;
