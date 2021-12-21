// Mergesort
/*
Divide and Conquer recursive methodology to sort an array
Recursively divide the original input in two until we reach the base case of an array with only one item.
Single-item array is naturally sorted, so then we can just start combining.
Steps:

1) Recursively split the input array in half until sub-array with only one element remains
2) Merge each sroted sub-array together to produce the final sorted array.

Time Complexity = O(nlog(n))
*/

// Helper function that sorts and combines 2 sorted arrays
function mergeSo(leftArr, rightArr) { // assume leftArr and rightArr are already sorted

}

// recurisve function that divides the arrays
function mergeSort(array) {
    // base case for recurision
    if (array.length <= 1) {
        return array
    }

    // grabbing the middle point of the current array
    const middleIdx = Math.floor(array.length / 2);

    // splitting the array into left array and right array
    const leftArr = array.slice(0, middleIdx); // second arg is non-inclusive
    const rightArr = array.slice(middleIdx); // goes to end of array if no second arg

    return array;
}

array1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63]
mergeSort(array1)
