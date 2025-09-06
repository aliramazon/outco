/**
 * Fibonacci Sequence
 *
 * Definition:
 * -----------
 * The Fibonacci sequence is a series of numbers where each number
 * is the sum of the two preceding ones.
 *
 * Mathematically:
 *  F(0) = 0
 *  F(1) = 1
 *  F(n) = F(n-1) + F(n-2)   for n ≥ 2
 *
 * Sequence:
 * ---------
 *  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 *
 * Example:
 * --------
 * fibonacci(0) = 0
 * fibonacci(1) = 1
 * fibonacci(5) = 5   (0, 1, 1, 2, 3, 5)
 * fibonacci(7) = 13  (0, 1, 1, 2, 3, 5, 8, 13)
 *
 * Notes:
 * ------
 * - Naive recursive implementation is simple but inefficient (O(2^n)).
 * - Iterative or memoized versions are more efficient (O(n) or better).
 */

const nthFibonacci_v1 = (n: number) => {
    if (n <= 1) return n;
    return nthFibonacci_v1(n - 1) + nthFibonacci_v1(n - 2);
};

const nthFibonacci_v2 = (n: number) => {
    const fibonacci = [0, 1];

    const searchFib = (i: number) => {
        if (i > n) return;
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        searchFib(i + 1);
    };
    searchFib(2);

    return fibonacci[n];
};

console.log(nthFibonacci_v1(0) === 0 && nthFibonacci_v2(0) === 0);
console.log(nthFibonacci_v1(1) === 1 && nthFibonacci_v2(1) === 1);
console.log(nthFibonacci_v1(2) === 1 && nthFibonacci_v2(2) === 1);
console.log(nthFibonacci_v1(3) === 2 && nthFibonacci_v2(3) === 2);
console.log(nthFibonacci_v1(4) === 3 && nthFibonacci_v2(4) === 3);
console.log(nthFibonacci_v1(5) === 5 && nthFibonacci_v2(5) === 5);
console.log(nthFibonacci_v1(6) === 8 && nthFibonacci_v2(6) === 8);
console.log(nthFibonacci_v1(7) === 13 && nthFibonacci_v2(7) === 13);
console.log(nthFibonacci_v1(8) === 21 && nthFibonacci_v2(8) === 21);
console.log(nthFibonacci_v1(10) === 55 && nthFibonacci_v2(10) === 55);
console.log(nthFibonacci_v1(15) === 610 && nthFibonacci_v2(15) === 610);

// Bigger n (only safe for v2, v1 is too slow!)
console.log(nthFibonacci_v2(20) === 6765);
console.log(nthFibonacci_v2(30) === 832040);
console.log(nthFibonacci_v2(40) === 102334155);
