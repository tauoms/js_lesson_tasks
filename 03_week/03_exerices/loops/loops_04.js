// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let evenNumbersCounter = 0;
let currentNumber = 0;

for (let i = 1; i <= 20; i++) {
    currentNumber = Number(prompt(`Please enter any number. (${i}/20)`));
    if (currentNumber % 2 === 0) evenNumbersCounter++;
}

console.log(`${evenNumbersCounter}/20 numbers were even.`);