//Program 1 — Basic Function------------------------->

//Write a JavaScript function called greet() that prints:Hello Ranju

// function myFunc()
// {
//     console.log("Hello Ranju");
// }
// myFunc(); // Hello Ranju printed in console

//Program 2 ---------------------------------------->

//Write a function showName() that prints your name.
//Expected output: RANJU

// function showName()
// {
//     console.log("RANJU")
// }
// showName(); // RANJU printed in console

//Program 3 ---------------------------------------->
//Write a function showAge() that prints your age.

// function Age()
// {
//     console.log(25);
// }
// Age(); // 25


//Program 4 ---------------------------------------->
//Write a function calculateSum() that creates two variables inside the function:
//  function calculateSum()
 
// {
//     let a = 2;
//     let b = 5;
//     sum = a + b ;
//     console.log(sum);

// }
// calculateSum();

//Program 5 ---------------------------------------->
//Write a function checkNumber() that creates: 
// Then check whether the number is positive or negative and print the result.

// function checkNumber() {
//     let a = 10;

//     if (a % 2 == 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }

// checkNumber();

//Program 5 ---------------------------------------->
//Find largest between Two numbers

// function findLargest()
// {
//     let a = 20;
//     let b = 50;
//     if (a>b)
//     {
//         console.log("a is greater");

//     }
//     else
//                 console.log("b is greater");


// }
// findLargest(); // b is greater

//================---- Function with Parameters (Single parameters)----=============================================================================


//Problem 1. Create a function called greetUser() that accepts one parameter called name.

// function greetUser(name)
// {
//     console.log(name);

// }
// greetUser("Ranju"); 

//----------------------------------------------------

//Problem 2. Create a function called showAge() with one parameter called age.

// function showAge(age)
// {
// console.log(" my age is" +age);
// }
// showAge(25);

//----------------------------------------------------


// Problem 3 — Create a function called squareNumber() with one parameter called num. (use Single Parameter)

// function squareNumber(num)
// {
//   let a = num * num;
//   console.log(a);

// }
// squareNumber(10);

//----------------------------------------------------


// Problem  4 — Create a function called checkEven() with one parameter called num (Single Parameter)
// When u call the function - > checkEven(12); out put is even

// function checkEven(num)
// {

//     if (num % 2 == 0 )
//     {
//         console.log("Even");
//     }
//     else
//     {
//         console.log("Odd");
//     }

// }
// checkEven(12);

//----------------------------------------------------

//Problem 5. // Create a function called checkAge() with one parameter called age.
// Rules:
// If age >= 18 → print "Eligible"
// Otherwise → print "Not Eligible"


// function checkAge(age)
// {
//     if (age>18)
//     {
//         console.log('Eligible');
    
//     }
// else
// {
//         console.log('Not Eligible');
// }

// }
// checkAge(25);

//=================FUNCTIONS WITH MULTIPLE PARAMETERS=================

//Problem 1 : Create a function called addNumbers() with two parameters: a, b , addNumbers(10, 20); => 30

// function addNumbers(a,b)
// {
//     let sum = a+b;
//     console.log('sum is' + sum);
// }
// addNumbers(10,20);

//----------------------------------------------------

//Problem 2 : Question 2 — Multiple Parameters , Create a function called subtractNumbers() with two parameters:a,b ,subtractNumbers(50, 20); difference is 30


// function SubsctractNumbers(c,d)
// {
// let sub = c - d;
// console.log('Difference is' + sub);

// }
// SubsctractNumbers(100,70); 
//----------------------------------------------------

// Problem 3 .Create a function called multiplyNumbers() with two parameters.

// function multiplyNumbers(q,w)
// {
//     let mul = q * w
//     console.log('Multiplication answer is' + mul);
// }
// multiplyNumbers(20,4);

//----------------------------------------------------


// Problem 4 : Create a function called calculateAverage() with two parameters:

// function calculateAverage(a,b)
//     {

//         let avg = (a + b) / 2 ;
//         console.log('Average is '+avg);
//     }
// calculateAverage(10,2);


//============Using Return===============================

// function add(a, b) {
//     return a + b;
// }

// add(10, 50);
// console.log(result);

//--------------------------------------------------------

// Create a function called getNumber().Inside the function: return 10; 
// Then call the function and store the returned value in a variable called result.Finally, print result.

// function getNumber()
// {
//     return 220;
// }
// let result = getNumber() //  store the returned value in a variable called result
// console.log(result); //220

//Problem 3. Add Two Numbers Using return

// function addNum(a,b)
// {
//     let add = a + b;
//     return add;
// }
// let sum = addNum(10,20);
// console.log(sum);

//---------------------------------------------------

//Problem 4. Subtraction Using return

// Write a JavaScript function named:subtractNumbers()

//The function must have two parameters: a, b
// Inside the function:
// Subtract b from a.
// Store the answer in a variable called difference.
// Use return to send difference back.

// function subtractNumbers(a,b)
// {
// let substract = a-b;
// return substract;
// }
// let result = subtractNumbers(20,5);
// console.log(result);

//=================ARROW FUNCTION========================

// MyFun = () =>
// {
//     console.log("Hello Ranju");
// };
// MyFun();

//------------------------------------------
// myFunctions = (a,b) =>
// {

//     let sum = a +b;
//     return sum;
// }
// let result = myFunctions(10,20);
// console.log(result); // 30

// Single parameter arrow function

// myFunction = (a) =>  a;
// console.log(myFunction(10)); // 10


alert("Hello Ranju");