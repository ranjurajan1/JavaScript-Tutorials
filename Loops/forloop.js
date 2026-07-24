// for(i=1;i<=5;i++){
//     console.log("hello",i);
// }
//output
//hello 1
//hello 2
//hello 3
//hello 4
//hello 5
//-----------------------------------------

//EXAMPLE 2

//Print 1 to 10 using for loop
// for(i=1;i<=10;i++)
// {
//     console.log(i);
// }
//output 1 , 2 , 3 ,4 5,6, 7, 8,9,10
//---------------------------------

//EXAMPLE 3 - Print multiplication table of 5

// for(i=1;i<=10;i++)
// {
//     console.log("5 * " + i + " = " + (5 * i));
// }
// "5 * "        → text piece 1
// +             → JOIN
// i             → variable value (1,2,3...)
// +             → JOIN
// " = "         → text piece 3
// +             → JOIN
// (5 * i)

//--------------------------------------

//EXAMPLE 4 -  Print only EVEN numbers from 1 to 20

// for(i=2;i<=20;i+=2)
// {
//     console.log(i);
// }
//output 2,4,6,8,10,12,14,16,18,20

//--------------------------------------
//EXAMPLE 6 - Calculate sum of numbers from 1 to 10

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log("Sum = " + sum);

//----------------------------------------
// for (let i = 1; i <= 10; i++) 
// {
//    console.log(`${i} * 5 = ${i*5}`);
// }
//-----------------------------------------

// Q1. Print numbers 1 to 10
// for(i=1;i<=10;i++)
// {
//    console.log(i);
// }
//---------------------------
// Q1. Print numbers 10 to 1
// for(i=10;i>=1;i--)
// {
//    console.log(i);
// }
//---------------------------
// Q3. Print only EVEN numbers from 1 to 20

   for(i=2;i<=20;i+=2)
   {
      console.log(i);
   }