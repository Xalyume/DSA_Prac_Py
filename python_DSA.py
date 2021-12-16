# Basic Node Class for Binary Tree
class Node:
    def __init__(self, value, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

"""
          a
        /   \
       b     c
      / \     \
     d   e     f
"""

# Breadth first traversal - by layer - explores all nodes in the same layer before going down
# Utilizes a queue - FIFO

def bfs_traversal(root):
    queue = [root]

    while len(queue) is not 0:
        popped_node = queue.pop(0)

        print(popped_node.value)

        if popped_node.left is not None:
            queue.append(popped_node.left)

        if popped_node.right is not None:
            queue.append(popped_node.right)

    return

bfs_traversal(a)
