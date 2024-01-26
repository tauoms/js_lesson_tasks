// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

let inputNumber;
let amountOfNumbers = 0;
let sumOfNumbers = 0;
let shouldStop = '';

while (shouldStop !== 'n') {
    inputNumber = Number(prompt('Please input a number:'));
    amountOfNumbers++;
    sumOfNumbers += inputNumber;
    shouldStop = prompt('Do you want to continue giving numbers? (y/n):');
    if (shouldStop.toLowerCase == 'n') break;
}

console.log(`The average of all input numbers is: ${(sumOfNumbers / amountOfNumbers).toFixed(2)} (${sumOfNumbers} / ${amountOfNumbers})`);