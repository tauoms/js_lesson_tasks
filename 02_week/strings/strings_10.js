/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
    return (word.slice(0, 1)).toUpperCase() 
    + (word.slice(1)).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"