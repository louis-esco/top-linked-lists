import Node from "./node";

export default class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let lastNode = this.head;
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      lastNode.nextNode = new Node(value);
    }
  }
}
