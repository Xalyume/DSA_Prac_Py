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
