// Define Veriables
var fruit = "apricot";
var uppercaseFruit = "APRICOT";
// Tests for equality with strings
console.log(fruit === "apricot"); // True
console.log(fruit === "peas"); // False
// Tests for inequality with strings
console.log(fruit !== "apricot"); //false
console.log(fruit !== "peas"); //true
console.log("_________________________________");
// Tests using the lower case function
console.log("Is APRICOT in lowercase equal to apricot?");
console.log(uppercaseFruit.toLowerCase() === "apricot"); // true
console.log("Is APRICOT in lowercase not equal to apricot?");
console.log(uppercaseFruit.toLowerCase() !== "apricot"); // false
console.log("__________________________________");
// Numerical tests
var number1 = 10;
var number2 = 20;
// Equality test
console.log(number1 === 10); // True
console.log(number1 === 5); // False
// Inequality test
console.log(number1 !== 5); // True
console.log(number1 !== 10); // False
// Greater than and less than tests
console.log(number2 > number1); // True
console.log(number1 > number2); // False
console.log(number1 < number2); // True
console.log(number2 < number1); // False
// Greater than or equal to and less than or equal to tests
console.log(number1 >= 10); // True
console.log(number1 >= 15); // False
console.log(number2 <= 20); // True
console.log(number2 <= 15); // False
console.log("____________________________________");
// Tests using "and" and "or" operators
var age = 25;
// "And" operator test
console.log(age > 20 && age < 30); // True
console.log(age > 20 && age > 30); // False
// "Or" operator test
console.log(age > 20 || age < 20); // True
console.log(age < 20 || age > 30); // False
console.log("____________________________________");
// Test whether an item is in an array
var fruits = ["apple", "orange", "mango"];
// Item in array test
console.log(fruits.includes("orange")); // True
console.log(fruits.includes("grape")); // False
// Test whether an item is not in an array
var vegetables = ["carrot", "broccoli", "spinach"];
// Item not in array test
console.log(!vegetables.includes("potato")); // True
console.log(!vegetables.includes("carrot")); // False
console.log("_______________________________________");
