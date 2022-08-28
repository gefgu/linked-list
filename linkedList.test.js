import { Node, LinkedList } from "./linkedList";

test("Node Factory working", () => {
  expect(Node(123)).toStrictEqual({ value: 123, nextNode: null });
});

test("LinkedList append size 1", () => {
  const linkedList = LinkedList();
  linkedList.append(32);

  expect(linkedList.head.value).toStrictEqual(32);
});

test("LinkedList append size 2", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);

  expect(linkedList.head.nextNode.value).toStrictEqual(15);
});

test("LinkedList prepend size 1", () => {
  const linkedList = LinkedList();
  linkedList.prepend(32);

  expect(linkedList.head.value).toStrictEqual(32);
});

test("LinkedList prepend size 2", () => {
  const linkedList = LinkedList();
  linkedList.prepend(32);
  linkedList.prepend(15);

  expect(linkedList.head.value).toStrictEqual(15);
});

test("LinkedList prepend size 3", () => {
  const linkedList = LinkedList();
  linkedList.prepend(32);
  linkedList.prepend(15);
  linkedList.prepend(15);

  expect(linkedList.size).toStrictEqual(3);
});

test("LinkedList append size 3", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(15);

  expect(linkedList.size).toStrictEqual(3);
});

test("LinkedList tail prepend", () => {
  const linkedList = LinkedList();
  linkedList.prepend(32);
  linkedList.prepend(15);

  expect(linkedList.tail.value).toStrictEqual(32);
});

test("LinkedList tail append", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);

  expect(linkedList.tail.value).toStrictEqual(15);
});

test("LinkedList at function", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);

  expect(linkedList.at(2)).toStrictEqual(17);
});

test("LinkedList pop function", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);
  linkedList.pop();

  expect(linkedList.tail.value).toStrictEqual(16);
});

test("LinkedList contains function -> true", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);

  expect(linkedList.contains(16)).toBe(true);
});

test("LinkedList contains function -> false", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);

  expect(linkedList.contains(18)).toBe(false);
});

test("LinkedList find function -> exists", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);

  expect(linkedList.find(16)).toBe(2);
});

test("LinkedList find function -> no exists", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.append(17);

  expect(linkedList.find(18)).toBe(-1);
});

test("LinkedList toString()", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(15);

  expect(linkedList.toString()).toBe("( 32 ) -> ( 15 ) -> null");
});


test("LinkedList insert at", () => {
  const linkedList = LinkedList();
  linkedList.append(32);
  linkedList.append(14);
  linkedList.append(15);
  linkedList.append(16);
  linkedList.insertAt(17, 2);

  expect(linkedList.find(17)).toBe(2);
});
