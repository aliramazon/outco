/* 
Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.
Input: [1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17
Output:11
*/

/* Time Complexity: O(log(N)) */
const binarySearch = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

console.log(binarySearch([1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 20, 22], 1));
0;
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
console.log(binarySearch([1, 3, 5, 7, 9], 2)); // -1
console.log(binarySearch([], 5)); // -1
