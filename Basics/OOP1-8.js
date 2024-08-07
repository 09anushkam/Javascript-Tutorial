// 8:38:42 - 9:14:06
// "use strict";

// this === window 
// check in browser's console
// console.log(this);
// console.log(window);

// Methods - function inside object
// this inside an object is the object
// this.prop inside of an object is the value of the prop present inside of that object
// const person={
//     firstName:"Anushka",
//     age:8,
//     about:function(){
//         console.log(this); // object
//         console.log(this.firstName); // Anushka
//         console.log(this.firstName,this.age); // Anushka 8
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }
// // console.log(person.about); //about func()
// person.about(); // calling about func()

// function personInfo(){
//     console.log(`person name is ${this.firstName} and person age is ${this.age}`);
// }
// const person1={
//     firstName:"Anushka",
//     age:8,
//     about:personInfo,
// }
// const person2={
//     firstName:"Anu",
//     age:18,
//     about:personInfo,
// }
// const person3={
//     firstName:"AM",
//     age:19,
//     about:personInfo,
// }
// personInfo();
// person1.about();
// person2.about();
// person3.about();

// function myFunc(){
//     console.log(this);
// }
// window.myFunc();
// myFunc(); //"use strict"-> it will give undefined otherwise it will give window object


// call,apply,bind
// call : Accepts arguments individually as a comma-separated list. 
// apply : Accepts arguments as an array or array-like object. 
// bind : Can preset arguments when creating the new function, but additional arguments can be passed when the new function is invoked.

// call - using method of one object to use them with the values of another object 
// const user1={
//     firstName:"Anushka",
//     age:19,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// }
// const user2={
//     firstName:"Anu",
//     age:20,
// }
// user1.about();
// user1.about.call(); //"use strict"->it will give an error otherwise it will give undefined
// user1.about.call(user1);
// user1.about.call(user2);

// const user1={
//     firstName:"Anushka",
//     age:19,
//     about:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }
// const user2={
//     firstName:"Anu",
//     age:20,
// }
// user1.about.call(user2,"drawing");
// user1.about.call(user2,"drawing","xyz");

// const user1={
//     firstName:"Anushka",
//     age:19,
//     about:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }
// const user2={
//     firstName:"Anu",
//     age:20,
// }

// apply-prints below line directly
// user1.about.apply(user2, ["guitar", "abc"]);

// bind-doesn't prints directly
// const func=user1.about.bind(user2,"guitar","xyz");
// func();

// don't do this mistake
// const user1={
//     firstName:"Anushka",
//     age:8,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
// };
// // const myFunc=user1.about; //the mistake
// const myFunc=user1.about.bind(user1);
// myFunc();
// // or
// user1.about();

// this inside Arrow function
// const user1={
//     firstName:"Anushka",
//     age:8,
//     about:()=>{
//         console.log(this.firstName,this.age); //it's this is window
//     }
// };
// user1.about();
// user1.about(user1);
// user1.about.call(user1);
// const myFunc=user1.about.bind(user1);
// myFunc();

// shorthand syntax for method
// const user1={
//     firstName:"Anushka",
//     age:8,
//     about(){  //shorthand syntax for method
//         console.log(this.firstName,this.age);
//     }
// };
// user1.about();





