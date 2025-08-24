/*
## Closest Value

Given a sorted array of integers and a target value, find the number in the array that is closest to the target.

Parameters:
- arr {Array of Integers}
- target {Integer}

Output:
- {Integer}

Constraints:
- If there are two numbers tied for the closest value, return the lower value.

Time Complexity: O(log N)
Space Complexity: O(1)

Examples:
[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5
[1, 2, 3], 8 --> 3
[1, 10, 22, 59, 67, 72, 100], 70 --> 72
*/

const closestValue = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let closestIdx = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        const diffWithMid = Math.abs(target - arr[mid]);
        const diffWithClosest = Math.abs(target - arr[closestIdx]);

        if (
            diffWithMid < diffWithClosest ||
            (diffWithClosest === diffWithMid && arr[closestIdx] > arr[mid])
        ) {
            closestIdx = mid;
        }

        if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

        // if (target > arr[mid]) {
        //     start = mid + 1;
        // } else {
        //     end = mid - 1;
        // }
    }

    return arr[closestIdx];
};

// Exact match
console.log(closestValue([1, 2, 3, 5, 7, 9], 5) === 5);

// Target smaller than all elements
console.log(closestValue([10, 20, 30], 1) === 10);

// Target larger than all elements
console.log(closestValue([2, 4, 6, 8], 15) === 8);

// Target between two elements (closer to lower)
console.log(closestValue([1, 4, 6, 10], 5) === 4);

// Target between two elements (closer to higher)
console.log(closestValue([1, 4, 6, 10], 7) === 6);

// Tie case: exactly between two values
console.log(closestValue([4, 6], 5) === 4);

// Tie case: wider spread
console.log(closestValue([2, 8], 5) === 2);

// Tie case: negatives and positives
console.log(closestValue([-10, 10], 0) === -10);

// Single element
console.log(closestValue([42], 100) === 42);

// Duplicate values
console.log(closestValue([1, 2, 2, 2, 3], 2) === 2);

// Target falls exactly on duplicate boundary
console.log(closestValue([1, 2, 4, 4, 6], 5) === 4);
