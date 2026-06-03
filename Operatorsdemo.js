let x=12,y=20;

// (1) ARITHMATIC OPERATOR []+ , - , * , / , %, ++,--,]

//**************************** 


// console.log(x+y);  //30
// console.log(y-x);  //10
// console.log(x*y);  //200
// console.log(y%x);  //0
// console.log(y/x);  //2
// console.log(5**2); //250

//----------------------------

// INCREMENT OPERATOR

// Normal case
// x= x+1;
// console.log(x); //11 is answer , above we mentioned x=10,

//----------------------------

// x++; //post increment operator
// console.log(x); 

//----------------------------

// ++x; // pre increment operator
// console.log(x); 


// DECREMET OPERATOR -- 

// y= 25; // normal floW
// y=y-1;
// console.log(y); // output:  24

//--------------------------

// y=30;
// y--; // post decrement operator
// console.log(y); // output : 29

// --------------------------

// y=36;
// --y; // post decrement operator
// console.log(y); // output : 29


// (2) ASSIGNEMENT OPERATOR 
//****************************

// x=100;
// y=50;
// x=x+y;
// console.log(x); //Out : 150

// --------------------------
// x=100;
// y=20;
// x+=y; //or  x=x+y 
// console.log(x); //Out : 120

// --------------------------

// x=100;
// y=20;
// x-=y; //or  x=x-y 
// console.log(x); //Out : 80

//Examples of assignment operators

// console.log(x+=y); // x=x+y
// console.log(x-=y); // x=x-y
// console.log(x*=y); // x=x*y
// console.log(x/=y); // x=x/y
// console.log(x%=y); // x=x%y


// (3)RELATIONAL OR COMPARISON OPERATORS :<, > , <= ,>= ,!=

//****************************
//Always return a boolean value

//Greater than > 
// --------------------------
// x=10;
// y=12;
// x=x>y;
// console.log(x); // false

// Less than 
// --------------------------

// x=10;
// y=12;
// x=x<y;
// console.log(x); // false

// greater than or equal to
// --------------------------
// x=10;
// y=10;
// x= x>=y;
// console.log(x); //false

// less than or equal to
// --------------------------
// x=10;
// y=20;
// x= x<=y;
// console.log(x); //True

// --------------------------

// equal to [ x==y check x and y are equal ]
// --------------------------
// x=10;
// y=10;
// x=x==y;
// console.log(x); // true both x and y are equal 

// equal to [ x==y check x and y are equal ]
// x=10;
// y=30;
// x=x==y;
// console.log(x); // false  true both x and y are not equal 

 // --------------------------

// NOT EQUAL TO !=

// x=10;
// y=20;
// x=x!=y;
// console.log(x); //true bz x and y are not equal
// --------------------------
// x=10;
// y=10;
// x=x!=y;
// console.log(x); //false bz x and y are  equal

//TERNARY OPERATOR  ? 
// x=10;
// y=20;
// console.log(x<y?x:y) //return x value 10 

// --------                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             -------------------
// x=10;
// y=20;
// console.log(y>x?y:x) //return y value 20

// (4) LOGICAL OPERATORS , && , || , !

//****************************

// logical AND &&
// --------------------------

// let a=true;
// let b= false;
// console.log(a &&b ); // false

// let a =true;
// let b= true;
// console.log(a &&b ); // True (&& Only both having True then only True )

//-----------------------------

// logical OR ||  
// --------------------------

// let a =true;
// let b= true;
// console.log(a || b ); // True , (Either one is true output is true)

// let a = false;
// let b= true;
// console.log(a || b ); // True

// logical NOT !
// --------------------------

// let a = true;
// console.log(!a ); // False (Opposite)

// let a = false;
// console.log(!a); // true (Opposite)