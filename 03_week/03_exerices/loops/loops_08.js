// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

let amountOfInputs = Number(prompt('How many numbers would you like to input?'));;
let currentNumber;
let maxNumber = -Infinity;
let minNumber = Infinity;

for (let i = 1; i <= amountOfInputs; i++) {
    currentNumber = Number(prompt(`Please enter any number. (${i}/${amountOfInputs})`));
    if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
    } if (currentNumber < minNumber) {
        minNumber = currentNumber;
    }
}

console.log(`Smallest input number was ${minNumber} and largest input number was ${maxNumber}`);


// Note: Does not work with comma decimals (i.e. "1,1") :(
