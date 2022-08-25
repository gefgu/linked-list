function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

function LinkedList(root) {
  let head = root;

  function append(value, node) {
    if (node.nextNode !== null) {
      append(value, node.nextNode);
    } else {
      node.nextNode = Node(value);
    }
  }

  function prepend(value) {
    const originalValue = head.value;
    const originalNextNode = head.nextNode;
    const newNode = Node(value, Node(originalValue, originalNextNode));
    head = newNode;
  }

  return { head: () => head, append: (value) => append(value, head), prepend };
}

export { Node, LinkedList };
