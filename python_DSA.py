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


def dfs_traversal_recursive(root):
    # base case - if the tree/current node is empty
    if root is None:
        return

    # Action
    print(root.value)
    # Left Recurse
    dfs_traversal_recursive(root.left)
    # Right Recurse
    dfs_traversal_recursive(root.right)
    # Sequence is different than with iterative method

    return


# dfs_traversal(a)
dfs_traversal_recursive(a)
# pre-order - a, b, d, e, c, f = in recursive method (action, recurse left, recurse right) ->  parent PRE-visited left then right children
# post-order - d, e, b, f, c, a = in recursive method(recurse left, recurse right, action) -> children then parent
# in-order - d, b, e, a, c, f = recursive method (recurse left, action, recurse right) -> traverse to left child, then parent, then right child


# Example of doing DFS traversal recursively on sum

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
five = Node(5)
six = Node(6)

one.left = two
one.right = three
two.left = four
two.right = five
three.right = six

def sum_tree_recursion(root):
    if root is None:
        return 0

    # return sum_tree_recursion(root.left) + root.value + sum_tree_recursion(root.right)
    return sum_tree_recursion(root.left) + sum_tree_recursion(root.right) + root.value
    # order of returns does not matter in this example (since we're just looking for the sum) -> order of return pertains to pre/post/in order mentioned above

print(sum_tree_recursion(one))
