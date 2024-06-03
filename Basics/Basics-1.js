// till 1:37:00
"use strict";

// PRINT
// console.log("hello world");
// console.log('hello world');
// console.log(`hello world`);

// VARIABLES
// var keyword
// var firstName="Anushka";
// console.log(firstName);
// firstName="Anu";
// console.log(firstName);
// var value = 2;
// console.log(value**3); //power

// rules for naming variables :-
// example:-
// 1value (invalid)
// value1 (valid)
// first_name (valid) //snake case writing
// _firstname (valid)
// first$name (valid)
// $firstname (invalid)
// first name (invalid)
// convention
// start with small letter and use camelCase (eg:firstName)

// let keyword (most recommended)
// let firstName="Anushka";
// firstName="Anu"; //error - block scope vs function scope
// console.log(firstName);

//declare constants
// const pi=3.14;
// pi=3; //error
// console.log(pi);

// STRING INDEXING
// let firstName="anushka m";
// console.log(firstName[2]);
// console.log(firstName.length);
// console.log(firstName[firstName.length-1]);

// STRING METHODS
// Strings are immutable - original string can't be changed
// let firstName=" anushka M ";
// console.log(firstName.length);
// firstName=firstName.trim();
// console.log(firstName.length);
// firstName=firstName.toUpperCase();
// firstName=firstName.toLowerCase();
// console.log(firstName);
// let newString=firstName.slice(0,3); //anu
// console.log(newString);

// typeof operator
// data types (primitive data types)
// string "xyz"
// number 2,3,4.5
// booleans
// undefined
// null
// BigInt
// Symbol

// let age=22;
// let firstName="anushka";
// console.log(typeof age);
// console.log(typeof firstName);
// covert number to string method1
// console.log(typeof(age+""));
// convert string to number
// console.log(typeof(+"34"));

// method 2 for string and number conversion
// let age=34;
// let str="34";
// str=Number(str);
// age=String(age);
// console.log(typeof str);
// console.log(typeof age);

// string concatenation
// let firstName="anushka";
// let secondName="murade";
// let fullName=firstName+" "+secondName;
// console.log(fullName);
// let string1="17";
// let string2="10";
// let newString=+string1 + +string2;
// console.log(typeof newString);
// console.log(newString);

// template string ${}
// let age=19;
// let firstName="Anushka";
// // "my name is Anushka and my age is 19"
// // let aboutMe="my name is "+firstName+" and my age is "+age;
// let aboutMe=`my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

// undefined
// let firstName;
// console.log(typeof firstName,firstName);
// firstName="anu";
// console.log(typeof firstName,firstName);

// null
// let myVariable=null;
// console.log(myVariable);
// myVariable="xyz";
// console.log(typeof myVariable,myVariable);
// console.log(typeof null); //bug in js

// BigInt
// let myNumber=BigInt(13478292929120047274792038478238748382839288247774);
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);

// booleans and comparison operator
// let num1=7;
// let num2="7";
// console.log(num1>num2);
// console.log(num1==num2); //cares about value only
// console.log(num1===num2); //cares about value and datatype both
// console.log(num1!=num2); //cares about value only
// console.log(num1!==num2); //cares about value and datatype both

































