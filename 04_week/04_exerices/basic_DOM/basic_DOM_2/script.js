/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const addFruitBtn = document.getElementById('addFruitBtn');
const addPancakeBtn = document.getElementById('addPancakeBtn');
const hideShowPancakesBtn = document.getElementById('hideShowPancakesBtn');

let pancakesVisible = true;

addFruitBtn.addEventListener('click', addFruit);
addPancakeBtn.addEventListener('click', addPancake);
hideShowPancakesBtn.addEventListener('click', hideShowPancakes);

function addFruit () {
    const fruitInput = document.getElementById('fruitInput');
    const fruitList = document.getElementById('fruitList');
    const addLi = document.createElement('li');

    if (fruitInput.value != '') {
    addLi.appendChild(document.createTextNode(fruitInput.value));
    fruitList.appendChild(addLi);
    fruitInput.value = '';
    }
}

function addPancake () {
    const fruitList = document.getElementById('fruitList');
    const addLi = document.createElement('li');
    addLi.classList.add('pancakeLi');
    addLi.appendChild(document.createTextNode('I AM A PANCAKE.'));
    fruitList.appendChild(addLi);
}

function hideShowPancakes () {
    const pancakes = document.querySelectorAll('.pancakeLi')
    if (pancakesVisible) {
        hideShowPancakesBtn.textContent = 'Show Pancakes';
        pancakes.forEach(element => { element.style.display = 'none';
            
        });
        pancakesVisible = false;

    } else {
        hideShowPancakesBtn.textContent = 'Hide Pancakes';
        pancakes.forEach(element => { element.style.display = 'list-item';
            
        });
        pancakesVisible = true;
    }

}