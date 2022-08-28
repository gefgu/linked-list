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
  }

  function contains(value) {
    let node = this.head;
    while (node?.value) {
      if (node.value === value) return true;
      if (node.nextNode === null) return false;
      node = node.nextNode;
    }
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
  };
}

export { Node, LinkedList };
