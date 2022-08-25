import { Node, LinkedList } from "./linkedList";

test("Node Factory working", () => {
  expect(Node(123)).toStrictEqual({ value: 123, next: null });
});
