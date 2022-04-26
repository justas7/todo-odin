import List from "./ListCl.js";

class Project extends List {
  constructor(id, name, dateCreated) {
    super();
    this.id = id;
    this.name = name;
    this.dateCreated = dateCreated;
  }
}

export default Project;
