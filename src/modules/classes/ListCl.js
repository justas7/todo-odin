class List {
  #list = [];

  setNewItem(item) {
    this.#list.push(item);
  }

  removeItem(item) {
    this.#list = this.#list.filter((val) => val !== item);
  }

  setList(list) {
    this.#list = list;
  }

  getList() {
    return this.#list;
  }
}

export default List;
