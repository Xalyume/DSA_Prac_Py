/**
	Data structure where values are chained sequentiially (ordered)

	More efficient for isnertion and deletion than other data structures like arrays
	Also does not require contiguous memory addressing (each item in the Linked List can be stored in different sections in memory)

	Insertion, worst case, is O(n) -> in Arrays, you have to shift every element after the inserted element by one, which can be costly.
	In Linked Lists, just have to correct the pointers

	Linked list - nodes that contain a stored value and a reference to the next node (and the previous node in certain cases)
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}


}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(val) {
		// Edgecase for if the instatiated Linked List is currently empty
		if (this.head === null) {
			this.head = new Node(val)
			return
		}

		// traverse through the Linked List to find the last node
		let curr = this.head;
		while (curr.next !== null) {
			curr = curr.next;
		}

		curr.next = new Node(val);
	}

	traverse() {
		let curr = this.head;
		while (curr !== null) { // want to also hit the last node (tail node)
			console.log(curr.val)
			curr = curr.next;
		}
	}

}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
console.log(list.head)
console.log(list.traverse())
