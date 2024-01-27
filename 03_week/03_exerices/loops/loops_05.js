// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let inputNumber;
let amountOfNumbers = 0;
let sumOfNumbers = 0;

while (inputNumber !== 0) {
    inputNumber = Number(prompt('Please input a number (Enter 0 to stop):'));
    if (inputNumber == 0) break;
    amountOfNumbers++;
    sumOfNumbers += inputNumber;
}

console.log(`The average of all input numbers is: ${(sumOfNumbers / amountOfNumbers).toFixed(2)} (${sumOfNumbers} / ${amountOfNumbers})`);