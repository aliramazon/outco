/*
Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.
See if you can solve this in O(N) time and O(1) auxiliary space.
*/

const sortedTwoSum = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return false;
};

console.log(sortedTwoSum([1, 2, 3, 4, 6], 6));
console.log(sortedTwoSum([1, 3, 4, 5, 7, 11], 8));
console.log(sortedTwoSum([0, 1, 2, 3], 5));
console.log(sortedTwoSum([1, 2, 3, 9], 8));
console.log(sortedTwoSum([-5, -3, 0, 4, 6], 1));
console.log(sortedTwoSum([], 10));
