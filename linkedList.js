function Node(value = null, next = null) {
  return { value, next };
}

function LinkedList(root) {
  const linkedList = { ...root };

  linkedList.append = (value) => {
    linkedList.next = Node(value);
  };

  return linkedList;
}

export { Node, LinkedList };
