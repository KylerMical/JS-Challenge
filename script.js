/* Challenge #1 */
let name = "KylerMical";
let newArr = [];

let nameAsArray = name.split("");
console.log(nameAsArray);
for (let i = 0; i < nameAsArray.length; i++) {
  newArr.push(nameAsArray[i]);
}
// console.log(newArr.join(""));
let finalName = newArr.join("");
console.log(finalName);

/* Challenge #2 */
let firstName = "Kyler";
let lastName = "Simmons";
let fullName = firstName + " " + lastName;

console.log(fullName);

/* Challenge #3 */
let secName = "Mical";
let length = secName.length;
console.log(length);

/* Challenge #3 */
let midName = "Alexandris";
let result = midName.toUpperCase();
console.log(result);

/* Challenge #4 */
let seclastName = "Simmons";
let answer = seclastName.substring(0, 3);
console.log(answer);

/* Challenge #5 */
console.log(5 > 3);

/* Challenge #6 */
console.log(6 < 5 || 10 < 6);

/* Challenge #7 */
if (6 < 7 && 5 < 2) {
  console.log(true);
} else {
  console.log(false);
}

/* Challenge #8 */
let number = 9;
console.log(!(number > 10));

/* Challenge #9 */
let numbeR = 50;

if (numbeR > 50) {
  console.log("high");
} else {
  console.log("low");
}

/* Challenge 10 */
let temperature = 0;

if (temperature > 80) {
  console.log("It's really hot outside.");
} else if (temperature > 50) {
  console.log("It is warm.");
} else if (temperature > 30) {
  console.log("It's sort of chilly.");
} else {
  console.log("It's cold outside.");
}

/* Challenge 11 */
let numbers = [10, 20, 30, 40, 50];

/* Challenge 12 */
numbers.push(60);
/* numbers.pop(); */

console.log(numbers);

/* Challenge 13 */
numbers.unshift(9);
numbers.shift();

/* Challenge 14 */
let newArray = [10, 20, 30, 40, 50, 60, 70];

let slicedArray = newArray.slice(2, 5);

console.log(slicedArray);

/* Challenge 15 */
let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
/* Challenge 16 */
let counter = 0;
let targetNumber = 5;

while (counter < targetNumber) {
  console.log(counter);
  counter++;
}
/* Challenge 17 */
let myObject = {
  name: "Ferry",
  age: 29,
  city: "Seattle",
};

for (let key in myObject) {
  console.log(myObject.city);
}
/* Challenge 18 */
function add(a, b) {
  return a + b;
}

console.log(add(4, 5));

/* Challenge 19 */
function isEven(number) {
  return number % 2 === 0; //this checks if the number is divisible by 2
}

console.log(isEven(4));

/* Challenge 20 */
function addElementToArray(array, element) {
  array.push(element); // this adds the new element at the end
  return array.length; // this returns the new length of the array
}

let thisArray = [1, 2, 3];
console.log(addElementToArray(thisArray, 4));
console.log(thisArray);
//________________________________________________________________________________________________________________________________

/* JavaScript Object Activities */

// 1-5
// Creating an object with properties title, author, and number of pages
let harryPotterBook = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  numberOfPages: 309,
};
// Accessing and printing the title and author of the book object
console.log("Title:", harryPotterBook.title);
console.log("Author:", harryPotterBook.author);
console.log("Number of Pages:", harryPotterBook.numberOfPages);

// Modifying the author and increasing the number of pages by 20
harryPotterBook.author = "Joanne Rowling";
harryPotterBook.numberOfPages += 20;

// Output the modified object to check the changes
console.log("Updated Author:", harryPotterBook.author);
console.log("Updated Number of Pages:", harryPotterBook.numberOfPages);

// Adding a new property 'publicationYear' to the book object
harryPotterBook.publicationYear = 1997;

// Output the updated object with the new property
console.log("Publication Year:", harryPotterBook.publicationYear);

// Removing the property from the book object
//which will be harryPotterBook.publicationYear;
//delete harryPotterBook.numberOfPages;
//console.log(harryPotterBook);
//_____________________________________________________________________________

// 6-7
// this is a nested object for a person
let person = {
  name: "Homer Simpson",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zipCode: "12345",
  },
  email: "homer.simpson@example.com",
};

// this is looping through the person object properties using for...in loop
for (let property in person) {
  console.log(`${property}: ${person[property]}`);

  // If the property is the address, loop through its sub-properties as well
  if (typeof person[property] === "object") {
    for (let subProperty in person[property]) {
      console.log(`  ${subProperty}: ${person[property][subProperty]}`);
    }
  }
}
//___________________________________________________________________________________

// 8-9

const movies = [
  {
    title: "Coraline",
    director: "Henry Selick",
    releaseYear: 2009,
  },
  {
    title: "Coraline 2",
    director: "Jane Doe",
    releaseYear: 2025,
  },
  {
    title: "The Nightmare Before Christmas",
    director: "Henry Selick",
    releaseYear: 1993,
  },
];

function findMovieByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  return movie ? movie : "Movie not found";
}

// see if the function finds the movie
const aftermath = findMovieByTitle("Coraline");
console.log(aftermath);
//________________________________________________________________________________

// 10

// Original object
const contractor = {
  name: "John Wick",
  email: "john.wick@example.com",
  age: 30,
};

// this is a shallow copy of the person object using Object.assign()
const contractorCopy = Object.assign({}, contractor);

// this is how to modify the copy's email without affecting the original
contractorCopy.email = "wick.john@example.com";

// the output both objects to check the result
console.log("Original person object:", contractor);
console.log("Modified person copy:", contractorCopy);
