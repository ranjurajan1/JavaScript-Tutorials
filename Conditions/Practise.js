//  ONLY IF CONDITION
//**********************//

// let person_age=20;

// if(person_age>=18) // condition is true
// {
//     console.log("Hai eligible for election");
// }
// console.log("program exited...."); // this is also executed
// //output  :is Hai eligible for election" and "program exited"

//---------------------------------------------------

// let person_age=18
// if(person_age>=20) // condition is true
// {
//     console.log("Hai eligible for election"); // not executed bz 18 not >=20
// }
// console.log("program exited...."); // this is executed
// //output: "program exited"


// IF ELSE CONDITION
//*********************//

// let person_age=20;
// if(person_age>=50) // condition is true
// {
//     console.log("Hai eligible for election");
// }
// else{
// console.log("program exited....");
// }
// this is also executed
//output  : "program exited" 20 NOT >=50, s else part is worked                      

// ODD OR EVEN NUMBERS IF , ELSE

// let number=5;
// if(number%2==0)
// {

//     console.log("it is an even number");
// }
// else
// {
//     console.log("it is an odd number");
    
// }
// output : it is an odd number 

//LARGEST OF THREE NUMBERS 
//************************* */
// let a=1000,b=50,c=30;
// if (a>b && a>c)
// {
//     console.log("a is largest number");
// }
// else if (b>a && b>c)
// {
//     console.log( "b is largest number");
// }
// else {
//     console.log("c is largest number");

// }
// //output : a is largest number
//********************************** */
//print week namelet weeknumber = 10;
// if (weeknumber ==1)
//     {
//     console.log("sunday");
// }
// else if (weeknumber==2)
// {
//     console.log("monday");
// }
// else if(weeknumber==3)
// {
//     console.log("tuesday");
// }
// else if(weeknumber==4)
// {
//     console.log("wednesday");
// }
// else if(weeknumber==5)
// {
//     console.log("Thursday");
// }
// else if(weeknumber==6)
// {
//     console.log("friday");
// }
// else if(weeknumber==7)
// {
//     console.log("saturday");
// }
// else 
// {
//     console.log("invalid entry");
// }

//Switch case statement 
// let weekno=1;

// switch(weekno)
// {
//     case 1: console.lo("sunday");
//     break;
//     case2: console.log("Monday");
//        break;
//     case3: console.log("Tuesday");
//        break;
//     case4: console.log("wednesday");
//        break;
//     case4: console.log("Thursday");
//        break;
//     case5: console.log("Friday");
//        break;
//     case6: console.log("Saturday");
//         break;
//     default : consol.log("invalid statement");
// }

//while loop demo

//print 1 to 10 numbers
//1........10
// let i=1;
// while (i<=10)
// {
//     console.log(i); // print 1 
//     i+=1 // i=i+1 // i value is 2

// }

//ONLY EVEN NUMBER BETWEEN 1 TO 10
// let i=2
// while(i<=10)
// {
//     console.log(i)
//     i+=2 // i=i+2
// }
//output 2,4,6,8,10,

//PRINT NUMBERS IN DECENTING ORDER

//  let i=10;
//  while(i>0)
//  {
//     console.log(i)
//     i-=1//i--
//  }


//DO WHILE LOOP
//.. Print 1 to 10 numbers
// let i =1;
// do{
// console.log(i);
// i++
// }
// while(i<=10);
// //output 1 to 10

//PRINT DECENDING ORDER 10,9,8...1
//************************** 
// let i =10;
// do{
//     console.log(i);
//     i-=1 //i--
// }
// while(i>0);
// ouput : 10,9,8,7,...1


//FORLOOP
//PRINT 1-10 NUMBER
// let i=1// or 
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }
// //output 1 ,2,3,4,5,6,7,8,9,10
//even numbers between 1-10
// let i=2;
// for(i=2;i<=10;i++)
// {
// console.log(i);
// }


//Jumping statements - break 
// for(let i=1;i<=10;i++)
// {
// if (i==5) // 
//     console.log(i);
// }
//Jumping statements - continue (skip the value)
// for(let i=1;i<=10;i++)
// {
// if (i==5)
//    continue;
//     console.log(i);
// }
//--------Multiple 
// for(let i=1;i<=10;i++)
// {
// if (i==5 || i == 6 || i== 9) //or skip multiple values (i == 3 || i==5)
// //     break;
//    continue;
//     console.log(i);
// }
// //output : 1,2,3,4,7,8,10
