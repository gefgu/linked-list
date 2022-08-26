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
    if (!this.head || this.head === undefined) {
      this.head = newNode;
    } else if (node.nextNode !== null) {
      append(value, node.nextNode);
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

  return {
    head,
    size,
    tail,
    append,
    prepend,
  };
}

export { Node, LinkedList };
