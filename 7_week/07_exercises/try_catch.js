'use strict';

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

// function task1(number) {
//   if (isNaN(number)) {
//     throw new Error('Oops, something went wrong!');
//   }
//   try {
//     let result = number / 2;
//     console.log('Success, result:', result);
//   } catch (error) {
//   // Simulate error
//   console.error(error.message);
//   }
// }

// task1('something');

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

// function task2() {
//   try {
//     let result = input * 2;
//   } catch (error) {
//     console.error('Something went wrong', error);
//   }
// }

// task2();

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

// function task3() {
//   try {
//     console.log('This is inside try block.');
//     console.log(something)
//     throw new Error('Error caught!');

//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log('Execution completed');
//   }
// }

// task3();

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  try {
    console.log('Outer try block.');
    console.log(something);
      try {
        throw new Error('Nested error occured');
      } catch (error) {
        console.log('Nested catch block:', error.message);
      }
  } catch (error) {
    console.error('Outer catch block:', error.message);
  }
}




// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  // Code here
}
