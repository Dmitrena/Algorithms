// Array, Object, Set, Map, WeakMap, WeakSet

// Linked List
// [value, next] -> [value, next]

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);
    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) this.tail = node;
  }

  toArray() {
    const output = [];
    let current = this.head;
    while (current) {
      output.push(current);
      current = current.next;
    }
    return output;
  }

  find(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  intertAfter(after, data) {
    const found = this.find(after);

    if (!found) {
      return;
    }

    found.next = new Node(data, found.next);
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.data;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }
  }
}

const list = new LinkedList();
list.append("My");
list.append("name");
list.prepend("Hi");

console.log(list.toArray());
console.log(list.find("Hi"));

console.log("list", list);
