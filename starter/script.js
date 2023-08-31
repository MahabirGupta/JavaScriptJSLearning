/*
let js = "amazing";

console.log(40 + 8 + 23 - 10);
console.log("Mahabir");
console.log(42);

// declaring a variable
// variable name conventions
let firstName = "Anish";
console.log(firstName);

let second_name = "Gupta";
console.log(second_name);

let PI = 3.145;

let myFirstJob = "Teacher";
let myCurrentJob = "Software Developer";
*/

// Data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Mahabir");

// reassigning value of variable
javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

// undefined variable
let year;
console.log(year);
console.log(typeof year);
year = 2023;
console.log(year);
console.log(typeof year);

// null datatype
console.log(typeof null);

let age = 30;
age = 31;

// const variable cannot be changed. It is immutable

const birthYear = 1981; // When using const we need to initialise the value

// var is the old way of declaring variables
var job = "teacher";
job = "Software Developer";

// Basic operators
const currentYear = 2023;
console.log(currentYear);
const ageMahabir = currentYear - 1981;
console.log("age = " + ageMahabir);

const ageAnish = currentYear - 2012;
console.log("age = " + ageAnish);

console.log(ageMahabir * 2, ageMahabir / 2);

// 2 to the power of 3
const result = 2 ** 3;
console.log(result);

// String concatination
const firstName = "Mahabir";
const lastName = "Gupta";
const fullName = firstName + " " + lastName;
console.log(fullName);

// assignment operators
let x = 15;
x += 10; //x=x+10=25
console.log(x);
x *= 4; //x=x*4=100
console.log(x);
x++; //x=x+1
console.log(x);
x--; //x=x-1;
console.log(x);

// comparison operators
console.log(ageMahabir > ageAnish);
console.log(ageAnish >= 21);
