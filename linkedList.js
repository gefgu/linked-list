function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

function LinkedList() {
  let head;
  let size = 0;
  let tail;

  function append(value, node = null) {
    node = node || this.head;
    const newNode = Node(value);
    if (!this?.head || this.head === undefined) {
      this.head = newNode;
      this.size++;
    } else if (node.nextNode !== null) {
      this.append(value, node.nextNode);
    } else {
      node.nextNode = newNode;
      this.size++;
    }
    this.tail = newNode;
  }

  function prepend(value) {
    const originalValue = this.head?.value;
    const originalNextNode = this.head?.nextNode;
    const newNode = Node(
      value,
      originalValue ? Node(originalValue, originalNextNode) : null
    );
    if (!this?.head) {
      this.tail = newNode;
    }
    this.head = newNode;
    this.size++;
  }

  function at(index) {
    let node = this.head;
    for (; index >= 0; index--) {
      node = node.nextNode;
      if (node === null) {
        return -1;
      }
    }
    return node.value;
  }

  function pop() {
    let node = this.head;
    while (node.nextNode) {
      if (
        node.nextNode.value === this.tail.value &&
        node.nextNode.nextNode === null
      )
        break;
      node = node.nextNode;
    }
    node.nextNode = null;
    this.tail = node;
    this.size--;
  }

  function contains(value) {
    let node = this.head;
    while (node?.value) {
      if (node.value === value) return true;
      if (node.nextNode === null) return false;
      node = node.nextNode;
    }
  }

  function find(value) {
    let node = this.head;
    let index = 0;
    while (node?.value) {
      if (node.value === value) return index;
      if (node.nextNode === null) return -1;
      node = node.nextNode;
      index++;
    }
  }

  function toString() {
    let node = this.head;
    let string = "";
    while (node?.value) {
      string += `( ${node.value} )`;

      string += " -> ";
      if (node.nextNode === null) {
        string += "null";
        break;
      }
      node = node.nextNode;
    }
    return string;
  }

  function insertAt(value, index) {
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      node = node.nextNode;
    }

    const originalValue = node?.value;
    const originalNextNode = node?.nextNode;
    const newNode = Node(
      value,
      originalValue ? Node(originalValue, originalNextNode) : null
    );

    node.nextNode = newNode;

    this.size++;
  }

  function removeAt(index) {
    let node = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!node?.nextNode) return;
      node = node.nextNode;
    }

    node.nextNode = node.nextNode.nextNode;

    this.size--;
  }

  return {
    head,
    size,
    tail,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export { Node, LinkedList };
