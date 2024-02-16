/* Task 1
Create a JavaScript object named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

const library = {}    

class BookFirst {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
}

const book1 = new BookFirst('Neuromancer', 'William Gibson', 1984);
const book2 = new BookFirst('Norwegian Wood', 'Haruki Murakami', 2000);

library.book1 = book1;
library.book2 = book2;

// console.log(library);

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// console.log(library.book1.title);
library.book2.yearPublished = 2010;

// console.log(library.book2);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library.book1.genres = ['Fiction', 'Science-Fiction'];
library['book1']['isAvailable'] = true;

// console.log(library.book1);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

class Book {
    constructor(title, author, yearPublished, genres) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.genres = genres;
    }
}

library.book3 = new Book('No Longer Human', 'Osamu Dazai', 1948, 'Semi-Autobiographical');

// console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

function createBook (title, author, yearPublished, genres) {
    return new Book(title, author, yearPublished, genres);
}

// console.log(createBook('Convenience Store Woman', 'Sayaka Murata', 2016, ['Fiction', 'Japanese']));

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonLibrary = JSON.stringify(library);

// console.log(jsonLibrary);

const objLibrary = JSON.parse(jsonLibrary);

console.log(objLibrary.book1.title);