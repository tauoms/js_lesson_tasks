
const type = document.querySelector('#type');
const nuts = document.querySelector('#nuts');
const bananas = document.querySelector('#bananas');
const syrup = document.querySelector('#syrup');
const whippedCream = document.querySelector('#whippedCream');
const iceCream = document.querySelector('#iceCream');
const totalPrice = document.querySelector('.totalPrice');
const toppings = [nuts, bananas, syrup, whippedCream, iceCream];

type.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);

function updatePrice () {
    let priceCounter = Number(type.value);

    toppings.forEach((currentElement => {
        if(currentElement.checked) {
        priceCounter += Number(currentElement.value)
        }
    }));

    // What I did initially:
    
    // if(document.querySelector("#nuts").checked) {
    //     priceCounter += Number(nuts.value);
    // } if(document.querySelector("#bananas").checked) {
    //     priceCounter += Number(bananas.value); 
    // } if(document.querySelector("#syrup").checked) {
    //     priceCounter += Number(syrup.value);
    // } if(document.querySelector("#whippedCream").checked) {
    //     priceCounter += Number(whippedCream.value);
    // } if(document.querySelector("#iceCream").checked) {
    //     priceCounter += Number(iceCream.value);
    // } 
    
    totalPrice.textContent = `${priceCounter}€`;

}