import { Node, LinkedList } from "./linkedList";

test("Node Factory working", () => {
  expect(Node(123)).toStrictEqual({ value: 123, next: null });
});

test("LinkedList Factory working", () => {
  expect(LinkedList(Node(24))).toStrictEqual({ value: 24, next: null });
});
