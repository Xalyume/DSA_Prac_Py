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

    while len(queue) != 0:
        popped_node = queue.pop(0)

        print(popped_node.value)

        if popped_node.left is not None:
            queue.append(popped_node.left)

        if popped_node.right is not None:
            queue.append(popped_node.right)

    return

# bfs_traversal(a)
# Should print a, b, c, d, e, f


# Depth first traversal - going to the lowest layer first - explores lowest leaf/child node before moving laterally
# Utilizes a stack - LIFO

def dfs_traversal(root):
    stack = [root]

    while len(stack) != 0:
        popped_node = stack.pop(len(stack)-1)

        # Action
        print(popped_node.value)

        # Right
        if popped_node.right is not None:
            stack.append(popped_node.right)

        # Left
        if popped_node.left is not None:
            stack.append(popped_node.left)

        # Whichever if statement goes last is guaranteed to be top of the stack (thus first one popped)
        # If you want to traversal left first, make the .left if statement last and vice versa for traversing right

    return


dfs_traversal(a)
