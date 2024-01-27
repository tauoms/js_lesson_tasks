// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

for (let num = 1; num < 100; num++) {
    if (num % 2 != 0) console.log(num);
}