class List {
  #list = [];

  setNewItem(item) {
    this.#list.push(item);
  }

  setList(list) {
    this.#list = list;
  }

  getList() {
    return this.#list;
  }
}

export default List;
