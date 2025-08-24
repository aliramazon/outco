/*
## Greater Values

Given a sorted array of integers and a target value, return the number 
of values in the array that are strictly greater than the target.

Parameters:
- arr {Array<Integer>} : Sorted array of integers
- target {Integer}     : Target value

Output:
- {Integer} : Count of values greater than the target

Constraints:
- Time Complexity: O(log N)
- Space Complexity: O(1)

Examples:
[1, 2, 3, 5, 5, 7, 9, 10, 11], 5  --> 4
[1, 2, 3], 4                       --> 0
[1, 10, 22, 59, 67, 72, 100], 13   --> 5
*/

const greaterValues = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return arr.length - start;
};

// Example cases
console.log(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5) === 4);
console.log(greaterValues([1, 2, 3], 4) === 0);
console.log(greaterValues([1, 10, 22, 59, 67, 72, 100], 13) === 5);

// Edge cases
console.log(greaterValues([], 5) === 0); // empty array
console.log(greaterValues([5], 5) === 0); // single element, equal
console.log(greaterValues([5], 4) === 1); // single element, greater
console.log(greaterValues([5], 6) === 0); // single element, smaller

console.log(greaterValues([1, 2, 3, 4, 5], 0) === 5); // all greater
console.log(greaterValues([1, 2, 3, 4, 5], 5) === 0); // none greater
console.log(greaterValues([1, 2, 3, 4, 5], 2) === 3); // some greater

console.log(greaterValues([-10, -5, 0, 5, 10], -6) === 4); // negatives and positives
console.log(greaterValues([-10, -5, 0, 5, 10], -10) === 4); // edge at left boundary
console.log(greaterValues([-10, -5, 0, 5, 10], 10) === 0); // edge at right boundary
