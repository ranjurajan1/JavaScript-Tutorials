//INITIALIZATION-----------------------------

//EXAMPLE :  USING VAR

var box; //initialization
console.log(box); // output : undefined

//EXAMPLE :  USING LET

let box1; //initialization
console.log(box1); // output : undefined

//EXAMPLE :  USING CONST

const box2 = "ranju"; // Declaration and initialization
console.log(box2); // output : ranju


//DECLARATION AND INITIALIZATION------------------------------------

//EXAMPLE :  USING VAR

var box = "ranju"; // Declaration and initialization
console.log(box); // output : ranju

//EXAMPLE :  USING LET

let age=23; // Declaration and initialization
console.log(age); // output : 23

//EXAMPLE :  USING CONST

const name = "arjun"; // Declaration and initialization
console.log(name); // output : arjun

//REASSIGNMENT--------------------------------------

//EXAMPLE :  USING VAR

var container = "ranju"; // Declaration and initialization
container = "arjun"; // reassignment allowed
console.log(container); // output : arjun

//EXAMPLE :  USING LET

let box1 = "ranju"; // Declaration and initialization
box1 = "arjun"; // reassignment allowed
console.log(box1); // output : arjun

//EXAMPLE :  USING CONST

const box2 = "ranju"; // Declaration and initialization
box2 = "arjun"; // reassignment not allowed
console.log(box2); // output : TypeError: Assignment to constant variable.

//REDECLARATION----------------------

//EXAMPLE 1 USING VAR

var container = "ranju"; // Declaration and initialization
var container = "arjun"; // redeclaration allowed

//EXAMPLE 2 USING LET

let box1 = "ranju"; // Declaration and initialization
let box1 = "arjun"; // redeclaration not allowed in let

//EXAMPLE 3 USING CONST

const box2 = "ranju"; // Declaration and initialization
const box2 = "arjun"; // redeclaration not allowed in const
console.log(box2); // output : TypeError: Identifier 'box2' has already been declared