// 1:37:00 - 2:38:00
"use strict";

// IF ELSE
// let age=18;
// if(age>18){
//     console.log("User can play the game");
// }
// else{
//     console.log("User cannot play the game");
// }

// let num=13
// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// falsy values - "",null,undefined,0,document.all,NAN,false
// let firstName="";
// if(firstName){
//     console.log(firstName);
// }
// else{
//     console.log("firstName is kinda empty");
// }

// TERNARY OPERATOR/CONDITIONAL OPERATOR (conditon ? stmnt 1 : stmnt 2 )
// let age=15;
// let drink;
// if(age>=5){
//     drink="coffee";
// }
// else{
//     drink="milk";
// }
// console.log(drink);

// let age=8;
// let drink=age>=5?"coffee":"milk";
// console.log(drink);

// AND OR OPERATOR
// let firstName="Anushka";
// let age=19;
// if(firstName[0]==="A" && firstName[firstName.length-1]==="a" && age===19){
//     console.log("Your name starts with A and ends with a and your age is 19");
// }
// if(firstName[0]==="a" || age>18){
//     console.log("Your name starts with A and your age is 19");
// }

// NESTED IF ELSE
// winning number 19
// 19 your guess is right
// 17 too low
// 20 too high
// let winningNumber=19;
// let userGuess=+prompt("Guess a number"); //note-prompt converts input into string
// // console.log(typeof userGuess,userGuess);
// if(userGuess===winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     // console.log("Your guess is wrong!!");
//     if(userGuess<winningNumber){
//         console.log("too low!!!");
//     }
//     else if(userGuess>winningNumber){
//         console.log("too low!!!");
//     }
// }

// let tempInDegree=20;
// if(tempInDegree<0){
//     console.log("extremely cold outside");
// }else if(tempInDegree<16){
//     console.log("It is cold outside");
// }else if(tempInDegree<25){
//     console.log("Weather is okay");
// }else if(tempInDegree<35){
//     console.log("lets go for swim");
// }else if(tempInDegree<45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// let tempInDegree=17;
// if(tempInDegree>40){
//     console.log("too hot");
// }else if(tempInDegree>30){
//     console.log("lets go for swim");
// }else if(tempInDegree>20){
//     console.log("Weather is cool");
// }else if(tempInDegree>10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }

// 2:09:17
// SWITCH CASE
// let day=2;
// switch(day){
//     case 0:console.log("Sunday");break;
//     case 1:console.log("Monday");break;
//     case 2:console.log("Tuesday");break;
//     case 3:console.log("Wednesday");break;
//     case 4:console.log("Thursday");break;
//     case 5:console.log("Friday");break;
//     case 6:console.log("Saturday");break;
//     default:console.log("Invalid Day");
// }

// WHILE LOOP
// let i=0;
// while(i<10){console.log(i);
// i++;}
// console.log(`current value of i is ${i}`);

// let num=10;
// let total=0;
// let i=0;
// while(i<=num){
// total=total+i;
// i++;
// }
// console.log(`sum of first ${num} natural numbers is ${total}`);
// Faster method -
// let n=10;
// let sum=n*(n+1)/2;
// console.log(sum);

// FOR LOOP
// if we declare the variable with "let-cannot use that variable outside the loop,var-can use the variable outside the loop"
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// // console.log(i); //not works
// let i=0;
// for(;i<10;i++){
//     console.log(i);
// }
// console.log(i); //works

// break keyword - breaks loop
// for(let i=1;i<=10;i++){
//     if(i===4){
//         break;
//     }console.log(i);
// }

// continue keyword - skips that iteration
// for(let i=1;i<=10;i++){
//     if(i===4){
//         continue;
//     }console.log(i);
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);
































