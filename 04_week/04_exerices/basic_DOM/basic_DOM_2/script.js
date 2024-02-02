/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const button = document.getElementById('addFruitBtn');

button.addEventListener('click', addFruit);

function addFruit () {
    const fruitInput = document.getElementById('fruitInput');
    const fruitList = document.getElementById('fruitList');
    const addLi = document.createElement('li');
    addLi.appendChild(document.createTextNode(fruitInput.value));
    fruitList.appendChild(addLi);
    fruitInput.value = '';
}