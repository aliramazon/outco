/* 
Given an array of integers, and a target value determine if there are two integers that add to the sum.
Input: [4,2,6,5,7,9,10], 13
Output: true
*/

const twoSum = (nums, target) => {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(target - num);
        }
    }

    return false;
};

console.log(twoSum([2, 7, 11, 15], 9)); // true  (2 + 7)
console.log(twoSum([1, 2, 3, 4], 8)); // false
console.log(twoSum([5, 1, 5], 10)); // true  (5 + 5)
console.log(twoSum([0, -2, 3, -1], 2)); // true  (-1 + 3)
console.log(twoSum([], 5)); // false
console.log(twoSum([4], 4)); // false (only one element)
