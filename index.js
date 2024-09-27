//console.log('hello');

//[SECTION] Syntax, Statements, and Comments
/*

	Statement
		- are instructions that will tell the computer to perform
		- JS staements usually end with semicolon (;) <optional>
			- semicolon are not required in JS, but we will use it to help us to train to locate where the statement ends

	Syntax
		- in programming, it is the set of rules that describe how the statement must be constructed

*/

//syntax: console.log('message')
console.log('hello');

/*all lines/blocks of code should be written in a specifiv manner to work. This is due to how these codes whre initially programmed to function 
and perform in a certain manner*/

//comments are parts of the code that gets ignored by language and it is meant to describe the written code

/*

	[SECTION] Variables
		- it used to contain data
	- declaring variables tells our devices that a variable name is created and is ready to store data

*/

//syntax: undefined
let myPet;
console.log(myPet);

//syntax: var initialization
let myName = 'Matt Nicole';
console.log(myName);

/*
	Guide to writing variables

		1. use the 'let' keyword followed by the variable name of your choosing. use the assignment operator (=) to assign the value
		2. variable names should start with lowercase character. use camelCase of multiple words
			- firstName
			- snake_case used in python
		3. for constant variables used the 'const' keyword
		4. variable names should be indicative for descriptive of the value being stored to avoid confusion
*/

let productName = 'Desktop Computer';
console.log(productName)

const pi = 3.1416;
console.log(pi)

//reassign variables vs initializing variables

//initializing
let supplier;
supplier = "Moozy";
console.log(supplier)

//reassigning
supplier = "Moozy"
console.log(supplier)

//hoisting is JS default behavior of moving declaration to the top
//in terms of variable and const, keyword var is hoisted and let and const does not allow hoisting

a = 5;
console.log(a)
var a;

b = 5;
console.log(b)
var b;


/*
PART 2 - OPERATORS AND TRUTH TABLE

*/
let number2 = 30;
let number3 = 49;

let sum = number2 + number3;
let diff = number2 - number3;
let product = number2 * number3;
let quotient = number2 / number3;
let mod = number2 % number3;

console.log(`sum is ${sum}`)
console.log(`difference is ${diff}`)
console.log(`product is ${product}`)
console.log(`quotient is ${quotient}`)
console.log(`mod is ${mod}`)

let inc1 = 1; 
let inc2 = 2;
++inc1 //(add before display )
inc2++ //(display before add)
console.log(inc)
console.log(inc2)
console.log(inc2)