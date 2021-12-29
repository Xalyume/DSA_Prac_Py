array_1 = [1, 5, 100, 20, 3, 68, 42, 250, 2]
# [1, 2, 3, 5, 20, 42, 68, 100, 250]

# Mergesort
"""
1) Recursively split the input array in half until sub-array with only one element remains
2) Merge each sroted sub-array together to produce the final sorted array.

Time Complexity = O(nlog(n))
"""

def merge(left_list, right_list):
    sorted_list = []

    left_idx = 0
    right_idx = 0

    while left_idx < len(left_list) and right_idx < len(right_list):
        if left_list[left_idx] < right_list[right_idx]:
            sorted_list.append(left_list[left_idx])
            left_idx += 1
        else:
            sorted_list.append(right_list[right_idx])
            right_idx += 1

    return [*sorted_list, *left_list[left_idx:], *right_list[right_idx:]]


def merge_sort(lst):
    if len(lst) == 1:
        return lst

    center = int(len(lst) / 2)

    left = lst[:center]
    right = lst[center:]

    return merge(merge_sort(left), merge_sort(right))


print(merge_sort(array_1))
