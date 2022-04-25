import ListCl from "./ListCl.js";

class ProjectCl extends ListCl {
  constructor(id, name, dateCreated) {
    super();
    this.id = id;
    this.name = name;
    this.dateCreated = dateCreated;
  }
}

export default ProjectCl;
