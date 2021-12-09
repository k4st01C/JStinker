console.log(3);

// class LinkedList {
// 	constructor(head, tail) {
// 		this.head = head;
// 		this.tail = tail;
// 	}
// }

// class Node {
// 	constructor(val, next, previous) {
// 		this.val = val;
// 		this.next = next;
// 		this.previous = previous;
// 	}
// }

class Node {
	constructor(val, next = null, prev = null) {
		this.val = val;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
}

LinkedList.prototype.add2Head = function (val) {
	const newNode = new Node(val, this.head);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
	return this;
};

LinkedList.prototype.add2Tail = function (val) {
	const newNode = new Node(val, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
	return this;
};

LinkedList.prototype.removeHead = function () {
	if (!this.head) return this;
	const val = this.head.val;
	this.head = this.head.next;
	if (this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

LinkedList.prototype.removeTail = function () {
	if (!this.tail) return this;
	const val = this.tail.val;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return val;
};

LinkedList.prototype.search = function (query) {
	let current = this.head;
	while (current) {
		if (current.val === query) return query;
		current = current.next;
	}
	return false;
};

LinkedList.prototype.indexOf = function (query) {
	const arr = [];
	let counter = 0;
	let current = this.head;
	while (current) {
		if (current.val === query) arr.push(counter);
		current = current.next;
		counter++;
	}
	return arr;
};

const myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);
