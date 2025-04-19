/* 
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.
Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]
Output: 8
*/

const numberOfOnesV1 = (bits) => {
    if (bits.length === 0 || bits[0] === 1) {
        return bits.length;
    }
    let start = 0;
    let end = bits.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (bits[mid] === 1 && bits[mid - 1] === 0) {
            return bits.length - mid;
        } else if (bits[mid - 1] === 1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};

const numberOfOnesV2 = (bits) => {
    let start = 0;
    let end = bits.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (bits[mid] === 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return bits.length - start;
};

console.log(numberOfOnesV2([0, 0, 0, 0, 1, 1]));
console.log(numberOfOnesV2([0, 0, 1]));
console.log(numberOfOnesV2([0, 1, 1]));
console.log(numberOfOnesV2([0, 1]));
console.log(numberOfOnesV2([1]), 1); // 1
console.log(numberOfOnesV2([0]), 0);
console.log(numberOfOnesV2([]));
