import { Node, LinkedList } from "./linkedList";

test("Node Factory working", () => {
  expect(Node(123)).toStrictEqual({ value: 123, nextNode: null });
});

test("LinkedList Factory working", () => {
  expect(LinkedList(Node(24)).list.value).toStrictEqual(24);
});

test("LinkedList append size 1", () => {
  const linkedList = LinkedList(Node(13));
  linkedList.append(32);

  expect(linkedList.list.nextNode.value).toStrictEqual(32);
});

test("LinkedList append size 2", () => {
  const linkedList = LinkedList(Node(13));
  linkedList.append(32);
  linkedList.append(15);

  expect(linkedList.list.nextNode.nextNode.value).toStrictEqual(15);
});

test("LinkedList prepend size 1", () => {
  const linkedList = LinkedList(Node(13));
  linkedList.append(32);

  expect(linkedList.list.nextNode.value).toStrictEqual(32);
});

test("LinkedList prepend size 2", () => {
  const linkedList = LinkedList(Node(13));
  linkedList.append(32);
  linkedList.append(15);

  expect(linkedList.list.nextNode.nextNode.value).toStrictEqual(15);
});
