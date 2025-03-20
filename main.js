            //ASSIGNMENT 1

//Exercise 1

console.log("Hello World");

//Exercise 2

let firstName = "Karolina";
let age = 38;
let favouriteColor = "blue";

// console.log(typeof firstName);
// console.log(`My age is ${age}`);

console.log(`My name is ${firstName}, I am ${age} and my color is ${favouriteColor}`);

//Exercise 3

let oranges = 50;
let lemons = 10;

console.log(oranges);
console.log(lemons);

console.log(`Addition ${oranges + lemons}`);
console.log(`Subtraction ${oranges - lemons}`);
console.log(`Multiplication ${oranges * lemons}`);
console.log(`Division ${oranges / lemons}`);

                //ASSIGNMENT 2

//prompt(`Enter the price tag:`);

let priceInput = prompt(`Enter the price tag (e.g., $99.49):`);
let priceString = priceInput.slice(1);
let price = parseFloat(priceString);

let discount = price * 0.10;
let newPrice = price - discount;


console.log(`Original price: $${price}`);
console.log(`Discount amount: $${discount}`);
console.log(`Your new price is $${newPrice}`);