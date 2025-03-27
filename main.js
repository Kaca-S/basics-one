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


                //Lesson 3

let online;
online = false;
        
if (online) {
    console.log("You are online");
 } else {
 console.log("You are not online");
}

 /*function isValidPassword(password, username) {
    return password.length >= 8 ? true : false;
}
console.log(isValidPassword("kakakaka"));*/


                    // ASSIGNMENT 3

function isValidPassword(password, username) {
if (password.length < 8) {
    return false;
}
else if (password.includes(' ')) {
    return false;
}
else if (password.includes(username)) {
    return false;
}
else {
    return true;
}
}

console.log(isValidPassword("myPass33", "user"));

/*let x = 5; if (x == 5) {console.log('A'); } else if (x === 5) { console.log('B'); } else { console.log('C'); }

let fruit = 'apple';
switch (fruit) {
case 'banana':
console.log('Banana');
case 'orange':
console.log('Orange');
default:
console.log('Unkown');
case 'apple':
console.log('Apple')
}

let score = 85;

if (score > 80) {
    if (score < 90) {console.log('B');
} else {
    console.log('A');
}}
 else {
    console.log('C');
}

function doNothing() {
    return;
}
function add(a,b) {
    return a+b;
}

console.log(doNothing());
console.log(add(5,7));

let value = 0;

if (value) {
    console.log('True');
}
else if (!value) {
    console.log('False');
}
else {
    console.log('Other');
} */