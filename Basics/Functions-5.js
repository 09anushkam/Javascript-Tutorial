// 4:51:00-6:18:00
"use strict";

// Function Declaration
// function singHappyBirthday(){
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();

// function Add(a,b){
//     return a+b;
// }
// console.log(Add(3,4));
// console.log(Add(4,7));

// function isEven(a){
//     if(a%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// // alternative
// function isEven(a){
//     return a%2===0;
// }
// console.log(isEven(5));

// function firstCharacter(anyString){
//     return anyString[0];
// }
// console.log(firstCharacter("zbc"));

// Linear Searching
// function Search(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }return -1;
// }
// const myArray=[1,4,6,8,90];
// console.log(Search(myArray,90));

// Function Expression
// const Add=function(a,b){
//         return a+b;
//     }
//     console.log(Add(3,4));
//     console.log(Add(4,7));

// const AreaOfCircle=function(r){
//     return 3.14*r*r;
// }
// console.log(AreaOfCircle(2));

// Arrow Functions
// const singHappyBirthday=function(){
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();

// const singHappyBirthday=()=>{
//     console.log("Happy Birthday To You...");
// }
// singHappyBirthday();

// const Add=(a,b)=>{
//     return a+b;
// }
// console.log(Add(3,4));
// console.log(Add(4,7));

// const AreaOfCircle=(r)=>{
//     return 3.14*r*r;
// }
// console.log(AreaOfCircle(2));

// Hoisting
// if u call a function above function declaration it will work but that is not true in case of function expression and arrow function
// hello();
// function hello(){
//     console.log("Hello World!");
// }

// function inside function
// const app=()=>{
//     const myFunc=()=>{
//         console.log("hello from myFunc");
//     }
//     const add=(a,b)=>a+b;
//     const sub=(a,b)=>a-b;
//     const mul=(a,b)=>a*b;
//     const div=(a,b)=>a/b;
//     const mod=(a,b)=>a%b;
//     console.log("inside app");
//     myFunc();
//     console.log(add(2,3));
//     console.log(sub(2,5));
//     console.log(mul(34,6));
//     console.log(div(34,0));
//     console.log(mod(3,2));
// }
// app();

// function app(){
//     const myFunc=()=>{
//         console.log("hello from myFunc");
//     }
//     const add=(a,b)=>a+b;
//     const sub=(a,b)=>a-b;
//     const mul=(a,b)=>a*b;
//     const div=(a,b)=>a/b;
//     const mod=(a,b)=>a%b;
//     console.log("inside app");
//     myFunc();
//     console.log(add(2,3));
//     console.log(sub(2,5));
//     console.log(mul(34,6));
//     console.log(div(34,0));
//     console.log(mod(3,2));
// }
// app();

// lexical scope
// const myVar="value1";
// function myApp(){
//     const myVar="value1";
//     function myFunc(){
//         const myVar="value59";
//         const myFunc2=()=>{
//         console.log("inside myFunc",myVar);
//         }
//         myFunc2();
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

// block scope vs function scope
// let and const are block scope
// var is function scope
// {
//     let firstName="anushka"; //let is accessible outside block
// }
// console.log(firstName);
// {
//     var firstName="anushka"; //var is accessible outside block
// }
// console.log(firstName);

// Default Parameter
// function add(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
// console.log(add(4));

// function add(a,b=0){
//     return a+b;
// }
// console.log(add(4));

// Rest Parameter
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`c is`,c);
// }
// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     return total;
// }
// console.log(addAll(1,2,3,4,5,6,7,8,9,10));


// Parameter destructuring
// object
// react
// const person={
//     firstName:"anu",
//     gender:"female",
// }
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// function printDetails({firstName,gender,age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// printDetails(person);

// Callback function
// function myFunc2(){
//     console.log("inside my func 2");
// }
// function myFunc(a){
//     console.log(a); //printing myFunc2
//     a(); //calling myFunc2
// }
// myFunc(myFunc2);

// function myFunc2(name){
//     console.log("inside myFunc2");
//     console.log(`your name is ${name}`);
// }
// function myFunc(Callback){
//     console.log("inside myFunc");
//     Callback("Anushka");
// }
// myFunc(myFunc2);

// Function returning function
// function myFunc(){
//     function myFunc2(){
//         return "hello world";
//     }
//     return myFunc2;
// }
// const ans=myFunc();
// console.log(ans());































