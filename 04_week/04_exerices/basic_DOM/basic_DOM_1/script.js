/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

// My solution:
const textHeading = document.getElementById('content');

function changeHeading () {
    textHeading.textContent = 'Hello, World!';
}

// Margit's live code:
// const textChanger = () => {
//     const textHeading = document.getElementById('content');
//     textHeading.textContent = 'Hello World!';
// };

// OR shortest version: 
// const textChanger = () => 
//     document.getElementByUD('content').textContent = 'Hello World!';