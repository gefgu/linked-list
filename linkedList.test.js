import { Node, LinkedList } from "./linkedList";

test("Node Factory working", () => {
  expect(Node(123)).toStrictEqual({ value: 123, next: null });
});

test("LinkedList Factory working", () => {
  expect(LinkedList(Node(24)).value).toStrictEqual(24);
});

test("LinkedList append", () => {
  const linkedList = LinkedList(Node(13));
  linkedList.append(32);

  expect(linkedList.next.value).toStrictEqual(32);
});
