/* 
Given two integers, find the greatest common divisor (GCD).
Input:52, 78
Output:26

In mathematics, the GCD of two integers is the largest positive integer that is a factor of both integers. In the case both 52 and 78 are divisible by 26. Which also happens to be the largest common factor as well.

Euclids’s algorithm uses decrease an conquer to converge at the GCD faster than the prime factorization approach. The basis for Euclid’s algorithm is that the GCD of two numbers must be a factor of its difference as well.
*/

/* Time Complexity: O(log min(num1, num2))*/
const gcd = (num1, num2) => {
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num2 > 0) {
        [num1, num2] = [num2, num1 % num2];
    }

    return num1;
};

console.log(gcd(60, 36)); // 12
console.log(gcd(48, 18)); // 6
console.log(gcd(-81, 27)); // 27 (handles negatives)
console.log(gcd(17, 13)); // 1  (prime to each other)
