function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

function LinkedList(root) {
  const list = { ...root };

  function append(value, node) {
    if (node.nextNode !== null) {
      append(value, node.nextNode);
    } else {
      node.nextNode = Node(value);
    }
  }

  return { list, append: (value) => append(value, list) };
}

export { Node, LinkedList };
