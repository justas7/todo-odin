class Task {
  isCompleted = false;

  constructor(id, task, dueDate, importance) {
    this.id = id;
    this.task = task;
    this.dueDate = dueDate;
    this.importance = importance;
  }
}

export default Task;
