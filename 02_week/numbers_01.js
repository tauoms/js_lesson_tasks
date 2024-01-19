// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {
    return number.toString();
}

function convertStringToNumber(string) {
    return Number.parseInt(string, 10);
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber('42')); // 42
console.log(convertStringToNumber('97')); // 97
console.log(convertStringToNumber('11')); // 11

// check types (as vscode does not show quote marks in console for strings)
console.log(typeof(convertNumberToString(42))); // string
console.log(typeof(convertNumberToString(97))); // string
console.log(typeof(convertNumberToString(11))); // string

console.log(typeof(convertStringToNumber('42'))); // number
console.log(typeof(convertStringToNumber('97'))); // number
console.log(typeof(convertStringToNumber('11'))); // number
