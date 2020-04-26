// implementing Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    let beforeDeletedNode = this.traverseToIndex(index - 1);
    const unwantedNode = beforeDeletedNode.next;
    beforeDeletedNode.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  printList() {
    const newArrayList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      newArrayList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(newArrayList);
  }
}

const firstItem = new LinkedList(5);

firstItem.append(10);
firstItem.append(12);
firstItem.prepend(16);
firstItem.append(15);
firstItem.prepend(3);
firstItem.insert(2, 56);
firstItem.append(20);
firstItem.insert(2, 55);
firstItem.remove(2);
firstItem.remove(1);
