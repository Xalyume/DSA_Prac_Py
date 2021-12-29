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
function merge(leftArr, rightArr) { // assume leftArr and rightArr are already sorted
    const mergedArr = [];

    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
        if (leftArr[leftIdx] < rightArr[rightIdx]) {
            mergedArr.push(leftArr[leftIdx]);
            leftIdx++;
        } else {
            mergedArr.push(rightArr[rightIdx]);
            rightIdx++;
        }
    }

    // this return ensures that the remaining values in either the leftArr or rightArr are also included into the final array
    return [...mergedArr, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
    // because the arrays are sorted, if one of the left/right arrays are "empty", the remaining values in the "non-empty" array will be greater than the last value of the mergedArr
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

    return merge( // mergeSort splits until base case then we merge those and the continue to merge back up.
        mergeSort(leftArr),
        mergeSort(rightArr),
    );
}

array1 = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
// console.log(mergeSort(array1))


// Insertion Sort
/*
Builds up a sorted array at the beginning of the list.
Begins the sorted array with the first element
Then inspects the next element and swaps it backwards into the sorted array until it is in the sorted position
Iterates through entire array/list, checking the current iteration value with every preceding value and swapping it backwards if the value preceding it is higher.


Time Complexity = O(n**2)
*/

function insertionSort(array) {
    for (let i = 0; i < array.length; i++) { // iterates through the entirity of the array
        for (j = i; j > 0; j--) { // looks only at every element BEFORE the current iteration of i (iterates backwards til 0)
        // (does not need to hit array[0] since it does not have a preceding value)
            if (array[j] < array[j-1]) { // if current j value is less than value at j-1
                // swap the 2 values
                const temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
            }
        }
    }
    return array;
}

// console.log(insertionSort(array1))



// Quicksort
/*
Divide and conquer approach.
Pivot value is chosen in original array -> array is partitioned into 2 subarrays of values less than and greater than the pivote value
Combine result (resolve recursion)

Pivot is normally first or last element in the array.

Approach recursively - continue to partition subarrays until array lengths are 1 -> the resolutions of the recursion sorts the array.

Time Complexity: O(nlog(n))
*/

function quickSort(array) {
    // Recursion base case
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1] // Pivot point should usually be the first or last value in the array (for ease of use)

    const leftArr = []
    const rightArr = []

    for (let i = 0; i < array.length -1; i++) { // iterate through array to spread values to proper array based off of pivot
        let val = array[i]
        if (val <= pivot) {
            leftArr.push(val)
        } else {
            rightArr.push(val)
        }
    }

    // Conditionals to see how to go about doing recursion - need to make sure to add pivot since its not including in either left/rightArr
    if (leftArr.length > 0 && rightArr.length > 0) { // if both left and right array have values inside of it
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if (leftArr.length > 0){ // if only left array has values
        return [...quickSort(leftArr), pivot]
    } else { // if only irght array has values
        return [pivot, ...quickSort(rightArr)]
    }

}

console.log(quickSort(array1))
