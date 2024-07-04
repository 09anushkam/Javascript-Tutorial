// 2:41:56 - 3:46:46
"use strict";

// Arrays-mutable,reference type(object)
// let fruits=["apple","mango","grapes"];
// let numbers=[1,2,3,4];
// let mixed=[1,2,2.3,"string",null,undefined];
// console.log(fruits[1]);
// console.log(mixed);
// console.log(numbers);
// fruits[2]="banana";
// console.log(fruits);
// console.log(typeof mixed,typeof fruits,typeof numbers);
// console.log(Array.isArray(fruits)); //true
// let obj={}; //object literal
// console.log(typeof obj);
// console.log(Array.isArray(obj)); //false

// array push-adds at the end,pop-removes last element,unshift-adds at the start,shift-removes first element
// note - speed(push&pop)>speed(shift&unshift)
// let fruits=["apple","mango","grapes"];
// console.log(fruits);
// fruits.push("banana");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// let poppedFruit=fruits.pop();
// console.log(fruits);
// console.log("popped fruit is",poppedFruit);
// fruits.unshift("guava");
// console.log(fruits);
// let removedFruit=fruits.shift();
// console.log(fruits);
// console.log("Removed fruit is",removedFruit);

// primitive vs reference datatype
// let num1=6;
// let num2=num1;
// console.log("value is num1 is",num1);
// console.log("value is num1 is",num2);
// num1++;
// console.log("value is num1 is",num1);
// console.log("value is num1 is",num2);

// reference types - (),{},[]
// eg: array
// let array1=["item1","item2"];
// let array2=array1;
// console.log("array1",array1);
// console.log("array2",array2);
// array1.push("item3");
// console.log("array1",array1);
// console.log("array2",array2);

// 3:20:13
// clone array
// let array1=["item1","item2"];
// // let array2=["item1","item2"];
// // let array2=array1.slice(0); //method1
// let array2=array1.slice(0).concat(["item3","item4"]);
// // let array2=[].concat(array1,["item3","item4"]); //method2 //faster
// let oneMoreArray=["item3","item4"];
// // let array2=[...array1,...oneMoreArray]; //method3 //spread operator
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// for loop in array
// let fruits=["apple","mango","grapes","banana"];
// let fruits2=[];
// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUppercase());
// }
// console.log(fruits2);
// const fruits=["apple","mango"]; //preferable <- constant array but we can manipulate it using array methods instead of using let
// // let fruits=["apple","mango"];
// // fruits=["grapes","pineapple"];
// fruits.push("banana");
// console.log(fruits);

// while loop in array
// const fruits=["apple","mango","grapes"];
// const fruits2=[];
// let i=0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);

// for of loop in array
// const fruits=["apple","mango","grapes"];
// const fruits2=[];
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for in loop in array
// const fruits=["apple","mango","grapes"];
// const fruits2=[];
// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// array destructuring (variables <- array values)
// const myArray=["value1","value2","value3","value4"];
// let myVar1=myArray[0];    // value1
// let myVar2=myArray[1];    // value2
// let [myVar1,myVar2]=myArray;       // value1 and value2
// let [myVar1, ,myVar2]=myArray;     // value1 and value3
// let myNewArray=myArray.slice(2);   // value3 and value4

// let [myVar1,myVar2,...myNewArray]=myArray; // destructuring

// console.log("value of myVar1",myVar1);
// console.log("value of myVar2",myVar2);
// console.log(myNewArray);


































