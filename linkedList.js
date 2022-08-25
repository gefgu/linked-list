function Node(value = null, next = null) {
  return { value, next };
}

function LinkedList(root) {
  const list = { ...root };

  function append(value, node) {
    if (node.next !== null) {
      append(value, node.next);
    } else {
      node.next = Node(value);
    }
  }

  return { list, append: (value) => append(value, list) };
}

export { Node, LinkedList };
