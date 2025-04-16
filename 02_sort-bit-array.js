/* 
Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either a 1 or a 0).
See if you can solve this in O(N) time and O(1) auxiliary space.
*/

const sortBitArrayV1 = (bits) => {
    let zerosMaxIndex = -1;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 0) {
            zerosMaxIndex++;
        }
    }

    if (zerosMaxIndex === -1) return bits;

    for (let j = 0; j < bits.length; j++) {
        if (zerosMaxIndex >= j) {
            bits[j] = 0;
        } else {
            bits[j] = 1;
        }
    }

    return bits;
};

const sortBitArrayV2 = (bits) => {
    let start = 0;
    let end = bits.length - 1;

    while (start < end) {
        if (bits[start] === 1 && bits[end] === 0) {
            bits[end--] = 1;
            bits[start++] = 0;
        } else if (bits[start] === 1) {
            end--;
        } else if (bits[end] === 0) {
            start++;
        }
    }

    return bits;
};

const sortBitArrayV3 = (bits) => {
    let left = 0;
    let right = bits.length - 1;

    while (left < right) {
        while (bits[left] === 0) {
            left++;
        }

        while (bits[right] === 1) {
            right--;
        }
        if (left < right) {
            bits[left] = 0;
            bits[right] = 1;
        }
    }

    return bits;
};

console.log(sortBitArrayV3([0, 1, 1, 0])); // [0, 0, 1, 1]
console.log(sortBitArrayV3([1, 1, 0, 0, 1])); // [0, 0, 1, 1, 1]
console.log(sortBitArrayV3([1, 0, 1, 0, 0, 1])); // [0, 0, 0, 1, 1, 1]
console.log(sortBitArrayV3([0, 0, 0])); // [0, 0, 0]
console.log(sortBitArrayV3([1, 1, 1])); // [1, 1, 1]
console.log(sortBitArrayV3([])); // []
