// How js works?
// 1 compilation phase - i)early error checking,ii)determines scope of a variable
// 2 code execution phase - Creates execution context :
// (1) global execution context(call stack) : i)creation phase-global_memory_creation_phase,ii)code execution phase;
// (2) function execution context(call stack) : i)creation phase-local_memory_creation_phase,ii)code execution phase;
// Javascript is synchronous programming language and single threaded(executes code line by line)
// what is global execution context?

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName="anushka";
// console.log(firstName);

// hoisting

// 1)var - undefined,hoisted

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);
// // function declaration-1
// function myFunction(){
//     console.log("this is my function");
// }
// var firstName="anu";
// var lastName="Murade";
// var fullName= firstName+" "+lastName;
// console.log(fullName);

// console.log(myFunction);
// // function expression-2
// var myFunction=function(){
//     console.log("this is my function");
// }
// console.log(myFunction);

// 2)let,const - uninitialised,hoisted
// // Uncaught ReferenceError: Cannot access 'firstName' before initialization
// // console.log(firstName);
// let firstName="anushka";
// console.log(firstName);


// // Understanding of function execution context
// // arguments - array like object i.e. having index,length property
// let foo="foo";
// console.log(foo);
// function getFullName(firstName,lastName){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments.length);
//     let myVar="var inside func";
//     console.log(myVar);
//     const fullName=firstName+" "+lastName;
//     return fullName;
// }
// const personName=getFullName("anu","murade");
// console.log(personName);

// // lastName is present in lexical scope/environment 
// const lastName="Murade";
// const printName=function(){
//     const firstName="anushka";
//     console.log(firstName);
//     console.log(lastName);
// }
// printName();





















