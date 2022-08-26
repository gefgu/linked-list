function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

function LinkedList() {
  let head;
  let size = 0;

  function append(value, node = null) {
    node = node || this.head;
    if (!this.head || this.head === undefined) {
      this.head = Node(value);
    } else if (node.nextNode !== null) {
      append(value, node.nextNode);
    } else {
      node.nextNode = Node(value);
      this.size++;
    }
  }

  function prepend(value) {
    const originalValue = this.head?.value;
    const originalNextNode = this.head?.nextNode;
    const newNode = Node(
      value,
      originalValue ? Node(originalValue, originalNextNode) : null
    );
    this.head = newNode;
    this.size++;
  }

  return {
    head,
    size,
    append,
    prepend,
  };
}

export { Node, LinkedList };
