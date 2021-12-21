class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Methods
    def append(self, val):
        current = self.head
        if current:
            while current.next != None:
                current = current.next
            current.next = Node(val)
        else:
            self.head = Node(val)

    def traverse(self):
        current = self.head
        while current != None:
            print(current.value)
            current = current.next
        pass

linked_list = LinkedList()
linked_list.append('a')
linked_list.append('b')
linked_list.append('c')
linked_list.append('d')
linked_list.append('e')

linked_list.traverse()
