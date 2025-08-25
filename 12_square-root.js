/*
## Square Root

Given a positive integer, find its square root.

Parameters:
- value {Integer}

Output:
- {Float}

Constraints:
- Do not use a native built-in square root method.
- Ensure the result is accurate to 6 decimal places (0.000001).
- Time Complexity: O(log N)
- Space Complexity: O(1)

Examples:
4     --> 2.000000
98    --> 9.899495
14856 --> 121.885192
*/

const squareRoot = (number) => {
    let start = 0;
    let end = number;

    while (end - start > 1e-7) {
        let mid = (start + end) / 2;

        if (mid * mid > number) {
            end = mid;
        } else {
            start = mid;
        }
    }

    return parseFloat(start.toFixed(6));
};

console.log(squareRoot(1) === 1.0);
console.log(squareRoot(4) === 2.0);
console.log(squareRoot(9) === 3.0);
console.log(squareRoot(16) === 4.0);
console.log(squareRoot(10000) === 100.0);

// Non-perfect squares
console.log(squareRoot(2) === 1.414214);
console.log(squareRoot(3) === 1.732051);
console.log(squareRoot(5) === 2.236068);
console.log(squareRoot(10) === 3.162278);
console.log(squareRoot(98) === 9.899495);
console.log(squareRoot(14856) === 121.885192);

// Edge case
console.log(squareRoot(0) === 0.0);
