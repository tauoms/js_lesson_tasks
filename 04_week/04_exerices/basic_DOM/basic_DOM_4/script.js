// What I did initially (inside the function):
    
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


const type = document.querySelector('#type');
const nuts = document.querySelector('#nuts');
const bananas = document.querySelector('#bananas');
const syrup = document.querySelector('#syrup');
const whippedCream = document.querySelector('#whippedCream');
const iceCream = document.querySelector('#iceCream');
const totalPrice = document.querySelectorAll('.totalPrice');

const toppings = [nuts, bananas, syrup, whippedCream, iceCream];

type.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);

function updatePrice () {
    let priceCounter = Number(type.value);

    // Loop through 'toppings' array (line 24), add their value to priceCounter if checked.
    toppings.forEach((currentElement => {
        if (currentElement.checked) {
        priceCounter += Number(currentElement.value)
        }
    }));

    // Apparently querySelectorAll (on line 22) returns a LIST of matching elements. Loop through that list (containing the two elements with class .totalPrice [I changed them from ID to class in HTML]) and assign total price stored in priceCounter.
    totalPrice.forEach(currentElement => currentElement.textContent = `${priceCounter}€`);

    // Trigger animation for price-banner span (thank you Stack Overflow).
    const priceBannerSpan = document.querySelector('.price-banner > span');
    priceBannerSpan.style.animation = 'none';
    void priceBannerSpan.offsetWidth; // Trigger reflow
    priceBannerSpan.style.animation = 'zoomAndRotate 0.4s ease-in-out 1';
}