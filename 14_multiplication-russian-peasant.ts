/**
 * Russian Peasant Multiplication (a.k.a. Ancient Egyptian Multiplication)
 *
 * Problem:
 * --------
 * Multiply two integers (a, b) without using the standard multiplication operator,
 * relying only on halving, doubling, and addition.
 *
 * Method:
 * -------
 * 1. Start with two columns:
 *    - Left column = first number (a).
 *    - Right column = second number (b).
 *
 * 2. Repeat until the Left column becomes 1:
 *    - Halve the Left column (integer division).
 *    - Double the Right column.
 *
 * 3. For each row:
 *    - If the Left column is odd, keep the corresponding Right value.
 *    - If the Left column is even, discard the corresponding Right value.
 *
 * 4. Sum all kept Right values → that is the product a × b.
 *
 * Example (23 × 12):
 * ------------------
 * | Left | Right | Keep? |
 * |------|-------|-------|
 * | 23   | 12    | ✔ (odd)  |
 * | 11   | 24    | ✔ (odd)  |
 * | 5    | 48    | ✔ (odd)  |
 * | 2    | 96    | ✘ (even) |
 * | 1    | 192   | ✔ (odd)  |
 *
 * Sum of kept values = 12 + 24 + 48 + 192 = 276
 * Therefore, 23 × 12 = 276.
 *
 * Why it works:
 * -------------
 * - Every number can be written in binary (sum of powers of 2).
 * - Halving the Left column exposes those binary digits.
 *   - Odd → digit = 1 → include that power of two.
 *   - Even → digit = 0 → skip.
 * - Doubling the Right column precomputes "b × 2^k" values.
 * - Adding selected Right values reconstructs the full product.
 *
 * Complexity:
 * -----------
 * Time - O(log a), because we halve the Left column until it reaches 1.
 * Space - O(1)
 */

const multiplicationRussianPeasant = (a: number, b: number) => {
    if (a === 0 || b === 0) return 0;
    let result = 0;
    let isResultPositive = true;
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        isResultPositive = false;
    }

    [a, b] = [Math.abs(a), Math.abs(b)];

    if (a > b) {
        [a, b] = [b, a];
    }

    while (a >= 1) {
        if (a % 2 === 1) {
            result += b;
        }
        a = Math.floor(a / 2);
        b = b * 2;
    }

    if (!isResultPositive) {
        result *= -1;
    }

    return result;
};

console.log(multiplicationRussianPeasant(23, 12) === 276);
console.log(multiplicationRussianPeasant(7, 8) === 56);
console.log(multiplicationRussianPeasant(1, 99) === 99);

console.log(multiplicationRussianPeasant(-23, 12) === -276);
console.log(multiplicationRussianPeasant(-7, 8) === -56);
console.log(multiplicationRussianPeasant(-1, 99) === -99);

console.log(multiplicationRussianPeasant(23, -12) === -276);
console.log(multiplicationRussianPeasant(7, -8) === -56);
console.log(multiplicationRussianPeasant(1, -99) === -99);

console.log(multiplicationRussianPeasant(-23, -12) === 276);
console.log(multiplicationRussianPeasant(-7, -8) === 56);
console.log(multiplicationRussianPeasant(-1, -99) === 99);

console.log(multiplicationRussianPeasant(0, 12) === 0);
console.log(multiplicationRussianPeasant(23, 0) === 0);
console.log(multiplicationRussianPeasant(0, 0) === 0);
console.log(multiplicationRussianPeasant(-23, 0) === 0);
console.log(multiplicationRussianPeasant(0, -12) === 0);

console.log(multiplicationRussianPeasant(231, 782) === 180642);
console.log(multiplicationRussianPeasant(-231, 782) === -180642);
console.log(multiplicationRussianPeasant(231, -782) === -180642);
console.log(multiplicationRussianPeasant(-231, -782) === 180642);
