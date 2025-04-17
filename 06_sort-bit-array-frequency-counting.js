/* 
Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).
See if you can solve this in O(N) time and O(1) auxiliary space.
Try to solve this using a frequency count rather than using multiple pointers, or using a comparison sort function.
Input : [0, 1, 1, 0, 1, 1, 1, 0]
Output : [0, 0, 0, 1, 1, 1, 1, 1]
*/

const sortBitArray = (bits) => {
    const count = [0, 0];

    for (const bit of bits) {
        count[bit]++;
    }

    for (let i = 0; i < count[0]; i++) {
        bits[i] = 0;
    }

    for (let i = count[0]; i < bits.length; i++) {
        bits[i] = 1;
    }

    return bits;
};

console.log(sortBitArray([0, 1, 1, 0, 1, 1, 1, 0])); // [0, 0, 0, 1, 1, 1, 1, 1]
console.log(sortBitArray([1, 0])); // [0, 1]
console.log(sortBitArray([])); // []
console.log(sortBitArray([0, 0, 0])); // [0, 0, 0]
console.log(sortBitArray([1, 1, 1])); // [1, 1, 1]
