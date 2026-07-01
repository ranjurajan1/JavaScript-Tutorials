
// Variables in JavaScript

// var box="ranju"; // Declaration
// console.log(box);
// output : ranju

//-----------------------------------------------------

// var box="arjun";
// var box="jasir"; // redeclaration allowed
// console.log(box);
// output : Jasir //latest value ayirikum varika
 
// var box="ranju";
// box="Rajan";    // reassignment allowed
// console.log(box); // latest value ayirikum varika

//In Var redeclaration, re assignment both allowed. 

//   let Variable
//************************************/

// let box="ranju"; // Declaration
// console.log(box);
// // output : ranju

//-----------------------------------------------------

// Redeclaration not allowed

// let box1="ranju"; // Declaration
// let box1="arjun"; // redeclaration not allowed
// console.log(box1);
// Output: SyntaxError: Identifier 'box1' has already been declared

//------------------------------------------------------------

//In let 
// reassignment allowed. 

// let box2="ranju"; // Declaration
// box2="arjun"; // reassignment allowed
// console.log(box2);


//Const Variables
//*************************/

// const name = "arjun"; // Declaration
// console.log(name);
// Output : arjun

//----------------------
// reassignment not allowed

// const name = "Ranju";
// name = "arjun"; // reassignment not allowed
// Output :name = "arjun"; // reassignment not allowed.TypeError: Assignment to constant variable. 

// NOTES :  
//1.  In var redeclaration and reassignment both allowed.
//2.  In let redeclaration not allowed but reassignment allowed.
//3.  In const redeclaration and reassignment not allowed

//----------------------------------------------

// var - CAN be re-declared 
var name = "Arjun";   //Declaration
var name = "Rahul";   // ✅ No error
console.log(name);    // Rahul

//1. Var Reassignment allowed
var name = "Arjun";
name = "Rahul";   // Reassignment ✅ No error
console.log(name);    // Rahul


//------------------------------------

// let - CANNOT be re-declared
let city = "Kochi";
let city = "Kozhikode"; // ❌ Error: already declared

// let can be reassigned
let city = "Kochi"; 
city = "Kozhikode"; // ✅ No error
console.log(city); // Kozhikode

//----------------------------------------

// const - CANNOT be re-declared
const country = "India";
const country = "USA";  // ❌ Error: already declared


//----------------------------------------

// var - CAN be re-declared
var name = "Arjun";
var name = "Rahul";   // ✅ No error
console.log(name);    // Rahul

// let - CANNOT be re-declared
let city = "Kochi";
let city = "Kozhikode"; // ❌ Error: already declared

// const - CANNOT be re-declared
const country = "Canada";
const country = "USA";  // ❌ Error: already declared

//Pawan sir class
// var x;      //declaration
// x=1000;     // initialization

//*******VAR*********/

// var x= 5;            //Single line declaration and initialization
// var x=10,y=20,z=105  //Single statement multiple variables
// document.write(x);   // use only browser

 //Single line declaration and initialization

var x=5,y=20,z=500     //Single statement multiple variables
console.log(x);

//******LET *******/

// console.log(x);
// let x= 15;
// console.log(x);