// # Cars

// 1. **Create a Car Class:**

//    - Define a `Car` class with properties for the car's license plate, maker, model, current owner, price, and color.

class Car {
    constructor(license, maker, model, owner, price, color) {
        this.license = license;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
    }
}

// 2. **User Input for Car Details:**

//    - Set up an HTML form for users to input the car's license plate, maker, model, current owner, price, and color.
//    - Use JavaScript to collect the values entered by the user when the form is submitted.



// 3. **Create and Store Car Objects:**

//    - Upon form submission, instantiate a new `Car` object using the collected input values.
//    - Add this new `Car` object to an array that stores all the cars entered by the user.

const submitBtn = document.getElementById('submitBtn');

let allCars = [];

function addCar(event) {
    event.preventDefault()

    const licenseInput = document.getElementById('license').value;
    const makerInput = document.getElementById('maker').value;
    const modelInput = document.getElementById('model').value;
    const ownerInput = document.getElementById('owner').value;
    const priceInput = document.getElementById('price').value;
    const colorInput = document.getElementById('color').value;

    allCars.push(new Car(licenseInput, makerInput, modelInput, ownerInput, priceInput, colorInput));

    console.log(allCars);
}

submitBtn.addEventListener('click', addCar);

// 4. **Display Car Information:**

//    - Use JavaScript to dynamically generate a table on the webpage, displaying the information of each car in the array.
//    - Ensure the table updates to include each new car when it is added.

// 5. **Search for a Car by License Plate:**

//    - Implement a function that allows the user to search for a car using its license plate.
//    - Include error handling to manage cases where the search input is invalid or the license plate cannot be found.

// 6. **Show Search Results:**

//    - If the search successfully finds a car, display the car's make, model, and owner on the screen.
//    - If no matching car is found, display a message indicating that no results were found.

// 7. **Implement Error Handling:**
//    - Use `try...catch` blocks to handle any errors that may occur, especially during the search process, such as invalid input or a license plate that does not exist in the registry.
