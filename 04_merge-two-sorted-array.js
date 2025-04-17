/* 
    Given two sorted arrays of integers, combine the values into one sorted array?
    Input: [1,3,5], [2,4,6,8,10]
    Output: [1,2,3,4,5,6,8,10]
    See if you can solve this in O(N+M) time and O(N+M) auxiliary space.
*/

const mergeTwoSortedArrays = (arr1, arr2) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        const value1 = arr1[i];
        const value2 = arr2[j];

        if (i === arr1.length || value1 >= value2) {
            result.push(value2);
            j++;
        } else if (j === arr2.length || value1 <= value2) {
            result.push(value1);
            i++;
        }
    }

    return result;
};

console.log(mergeTwoSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeTwoSortedArrays([0, 2, 4], [1, 3, 5]));
// [0, 1, 2, 3, 4, 5]

console.log(mergeTwoSortedArrays([], [1, 2, 3]));
// [1, 2, 3]

console.log(mergeTwoSortedArrays([4, 5, 6], []));
// [4, 5, 6]

console.log(mergeTwoSortedArrays([], []));
// []

console.log(mergeTwoSortedArrays([-3, 0, 7], [-5, 2, 9]));
// [-5, -3, 0, 2, 7, 9]

console.log(mergeTwoSortedArrays([1, 1, 2], [1, 2, 3]));
// [1, 1, 1, 2, 2, 3]
