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

	contains(target) {
		let curr = this.head;
		while (curr !== null) { // want to also hit the last node (tail node)
			if (curr.val === target) {
				return true
			}
			curr = curr.next;
		}
		return false
	}

	deleteValue(target) {
		let curr = this.head;
		let prev = null;

		// edge case if target is first node(head) of LinkedList - detach head node and set this.head to the next node
		if (this.head.val === target) {
			this.head = this.head.next;
			return
		}

		while (curr !== null) {
			// this takes cause of potential edge case where target is last node since all nodes auto default to have a .next of null
			if (curr.val === target) {
				prev.next = curr.next
				return
			}
			prev = curr
			curr = curr.next
		}

		return
	}

}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');

// console.log(list.head)

// list.traverse()

// console.log(list.contains('a'))
// console.log(list.contains(6))

// Test case to see if head is properly removed
// list.deleteValue('a')
// list.traverse()

list.deleteValue('c')
list.traverse()
