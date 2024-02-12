

const form = document.querySelector('.form-container');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const totalPrice = document.querySelectorAll('.totalPrice');
const typeSelect = document.querySelector('#type');
const placeOrderBtn = document.querySelector('#placeOrderBtn');

let priceCounter;
let toppingsArr = [];
let extrasArr = [];


function updatePrice () {
    priceCounter = Number(typeSelect.value);

    checkToppings();

    checkBoxes.forEach((currentElement => {
        if (currentElement.checked) {
        priceCounter += Number(currentElement.value)
        }
    }));

    // querySelectorAll (on line 10) returns an NodeList of matching elements. Loop through that list and assign total price stored in priceCounter.
    totalPrice.forEach(currentElement => currentElement.textContent = `${priceCounter}€`);

    // Trigger animation for price-banner span (thank you Stack Overflow).
    const priceBannerSpan = document.querySelector('.price-banner > span');
    priceBannerSpan.style.animation = 'none';
    void priceBannerSpan.offsetWidth; // Trigger reflow
    priceBannerSpan.style.animation = 'zoomAndRotate 0.4s ease-in-out 1';
}

const addItem = (itemName, category) => {
    if (category === 'toppings') {
        toppingsArr.push(itemName);
    } else { 
        extrasArr.push(itemName);
    }
}

const checkToppings = () => {
    toppingsArr = [];
    extrasArr = [];

    for (const item of checkBoxes) {
        const itemName = item.dataset.name;
        const category = item.dataset.category;

        if (item.checked) {
            addItem(itemName, category);
        }
    }

}

const displayOrder = () => {
    const customerName = document.querySelector('#customerName').value;
    const orderName = document.querySelector('#order_name');
    const orderType = document.querySelector('#order_type');
    const orderToppings = document.querySelector('#order_toppings');
    const orderExtras = document.querySelector('#order_extras');
    const orderPrice = document.querySelector('#order_price');
    const orderPrintOut = document.querySelector('#orderPrintOut')

    orderName.textContent = customerName;
    orderType.textContent = typeSelect.selectedOptions[0].text.slice(0, -4);
    orderToppings.textContent = toppingsArr.join(', ');
    orderExtras.textContent = extrasArr.join(', ');
    orderPrice.textContent = `${priceCounter}€`;

    orderPrintOut.style.visibility = "visible";
}


form.addEventListener('change', updatePrice);
placeOrderBtn.addEventListener('click', displayOrder);



/*
Margit's live code version:

const form = document.querySelector('.form-container');

const priceCalc = () => {
    const typeSelect = document.querySelector('#type');
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const priceBanner = document.querySelector('#totalPrice');

    let totalAmount = parseInt(typeSelect.value);

    // For Of loop - only for arrays & NodeLists!
    for (const item of checkBoxes) { 
        if (item.checked) {
            totalAmount += parseInt(checkbox.value);
        }
    }

    priceBanner.textContent = `$${totalAmount}`;

};

form.addEventListener('change', priceCalc);
*/

// First working version:

// const type = document.querySelector('#type');
// const nuts = document.querySelector('#nuts');
// const bananas = document.querySelector('#bananas');
// const syrup = document.querySelector('#syrup');
// const whippedCream = document.querySelector('#whippedCream');
// const iceCream = document.querySelector('#iceCream');
// const totalPrice = document.querySelectorAll('.totalPrice');

// const toppings = [nuts, bananas, syrup, whippedCream, iceCream];

// type.addEventListener('change', updatePrice);
// nuts.addEventListener('change', updatePrice);
// bananas.addEventListener('change', updatePrice);
// syrup.addEventListener('change', updatePrice);
// whippedCream.addEventListener('change', updatePrice);
// iceCream.addEventListener('change', updatePrice);

// function updatePrice () {
//     let priceCounter = Number(type.value);

//     // Loop through 'toppings' array (line 24)
//     toppings.forEach((currentElement => {
//         if (currentElement.checked) {
//         priceCounter += Number(currentElement.value)
//         }
//     }));

//     // querySelectorAll (on line 22) returns an NodeList of matching elements. Loop through that list and assign total price stored in priceCounter.
//     totalPrice.forEach(currentElement => currentElement.textContent = `${priceCounter}€`);

//     // Trigger animation for price-banner span (thank you Stack Overflow).
//     const priceBannerSpan = document.querySelector('.price-banner > span');
//     priceBannerSpan.style.animation = 'none';
//     void priceBannerSpan.offsetWidth; // Trigger reflow
//     priceBannerSpan.style.animation = 'zoomAndRotate 0.4s ease-in-out 1';
// }
