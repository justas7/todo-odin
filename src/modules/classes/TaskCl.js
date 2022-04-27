class Task {
  isCompleted = false;

  constructor(id, task, importance, taskDate) {
    this.id = id;
    this.task = task;
    this.importance = importance;
    this.taskDate = taskDate;
  }

  taskCompleted() {
    this.isCompleted = true;
  }
}

export default Task;
