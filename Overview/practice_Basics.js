// 11,38,43,47

// 07.js
// // trim() - removes spaces
// // toUpperCase() - all char uppercase
// // toLowerCase() - all char lowercase
// // slice() - refer example given below

// let firstName = "     harshit";
// console.log(firstName);
// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName);
// console.log(firstName.length);

// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// // slice(start_index,last_index);
// // let newString = firstName.slice(1); // arshit
// let newString = firstName.slice(1,4);  // ars
// console.log(newString);


// 08.js
// // 22 -> "22"
// // convert number to string. 
// let age = age + "";
// // "34" -> 34
// // convert string to number. 
// let myStr = +"34";


// 09.js
// let string1 = "17";
// let string2 = "10";
// let newString = +string1 + +string2;
// console.log(typeof newString,newString);


// 10.js
// template string - `${var1} ${var2}`; 
// let age = 22;
// let firstName = "harshit";
// // let aboutMe = "my name is " + firstName + " and my age is " + age; 
// let aboutMe = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);


// 11.js
// // undefined - nothing
// // null - somevalue that's null
// let firstName;
// console.log(typeof firstName);
// let myVariable = null;
// console.log(myVariable);
// console.log(typeof null); //object - bug , error 


// // BigInt - UNCLEAR
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);

// 12.js
// // == checks value but ignores datatype
// // === checks datatype along with it's value

// 17.js
// // nested if else
// // winning number 19 
// // 19 your guess is right 
// // 17 too low 
// // 20 too high 
// let winningNumber = 19;
// let userGuess = +prompt("Guess a number"); //**prompt

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }


// 22.js very imp note
// note: initialise i and other variables ouside the for loop while printing the i outside the loop otherwise it will give out of block scope error

// 26.js
// let fruits = ["apple", "mango", "grapes"];
// fruits[1] = "banana"; //replaces mango
// console.log(fruits);
// console.log(Array.isArray(fruits)); //to check if given data is in array or not
// note - typeof [] is same as typeof {} i.e. object thus we use Array.isArray() method to check if given element is array or not

// 27.js 
// // push-adds at the last,pop-deletes from the last,unshift-adds at the start,shift-deletes from the start

// 28.js -  primitve vs reference data types
// // primitve - original value is preserved
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++; //num1=num1+1
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// // reference types eg. array - original value gets changed
// // note - [], (), {} are reference datatypes
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);


// 29.js
// how to clone array using spread operator ...
// let array1 = ["item1", "item2"];
// // let array2 = array1.slice(0).concat(["item3", "item4"]); //1
// // let array2 = [].concat(array1,["item3", "item4"]); //2
// // new way - spread operator
// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray]; //3 <- most imp and preferable way of cloning an array
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// 30.js - for loop , 33.js - for of loop , 34.js - for in loop
// const fruits = ["apple", "mango", "grapes", "banana"];
// const fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);
// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);
// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);

// 31.js - constant array but we can manipulate it using array methods
// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits);

// 35.js -  array destructuring 
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

// 36.js - objects
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);
// // how to access data from objects using object.key or object["key"]
// console.log(person.name);
// console.log(person["hobbies"]);
// // how to add key value pair to objects
// person["gender"] = "male";
// console.log(person);

// 37.js - difference between dot and bracket notaion
// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }
// console.log(person["person hobbies"]); //space included successfully which is not possible in .
// person[key] = "harshitvashisth@gmail.com"; //adding key value pair in object
// // person["email"] = "harshitvashisth@gmail.com"; //same as above
// console.log(person);

// 38.js - UNCLEAR - for in,object.keys()
// // how to iterate object - for in loop , Object.keys(object) 
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }
// // all keys together make their own set of array and object
// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// 39.js - Computed properties
// const key1 = "objkey1";const key2 = "objkey2";
// const value1 = "myvalue1";const value2 = "myvalue2";
// // const obj = {
// //     objkey1 : "myvalue1",
// //     objkey2 : "myvalue2",
// // }
// // const obj = {
// //     objkey1 : value1,
// //     objkey2 : value2,
// // }
// // const obj = {
// //    "objkey1" : "myvalue1",
// //    "objkey2" : "myvalue2",
// }
// // const obj = {
// //     [key1] : value1,
// //     [key2] : value2
// // }

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);


// 40.js
// // spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];
// const newArray = [...array1, ...array2, 89, 69];
// // const newArray = [..."123456789"];
// console.log(newArray);

// // spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//   };
//   const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4",
//   };
// // the key that comes later is more prominent
//   const newObject = { ...obj2, ...obj1, key69: "value69" }; //here obj1 is more prominent
//   const newObject1 = { ...obj1, ...obj2, key69: "value69" }; //here obj2 is more prominent
//   const newObject2 = { ...["item1", "item2"] };
//   const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };
//   console.log(newObject);
//   console.log(newObject1);
//   console.log(newObject2);
//   console.log(newObject3);

// 41.js - object destructuring
// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
//   };
//   let { bandName, famousSong, ...restProps } = band;
//   console.log(bandName);
//   console.log(restProps); 


// 42.js - objects inside array 
// // very useful in real world applications
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }
// for(let index in users){
//     console.log(users[index].firstName);
// }

// 43.js - UNCLEAR
// nested destructuring 
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);

// 46.js - function declaration , function expression , arrow function
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }
// singHappyBirthday();


// 47.js - hoisting - if u call a function above function declaration it will work but that is not true in case of function expression and arrow function
// hello();
// function hello(){
//     console.log("hello world");
// }
// console.log(hello);

// 49.js
// lexical scope 
// const myVar = "value1";
// function myApp(){
//     function myFunc(){
//         const myVar = "value59";
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();       //3
//     }
//     console.log(myVar); //1
//     myFunc();           //2
// }
// myApp();


// 50.js - let and const are block scope
// if(true){
//     var firstName = "harshit"; //accessible outside the block
//     console.log(firstName);
// }
// console.log(firstName);
// function myApp(){
//     if(true){
//         let firstName = "harshit"; //can't access outside the block
//         console.log(firstName);
//     }
//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myApp();

// 51.js
// default parameter

// 52.js
// rest parameters

// 54.js
// callback functions - func(func(){})

// Difference between regular function Arrow functions


// 56.js....
// Array Methods : 
// forEach , sort , filter , map , reduce , find , every , some , fill , splice 
// (others : .push(elem),.pop(),.shift(),.unshift(elem),Array.isArray(arrayName)) , array=Array.from(nameOfArrayLikeObject)

// 66.js
// iterables 
// jispe hum for of loop laga sakein
// string , array , sets , maps are iterable 

// array like object 
// jinke pas length property hoti hai 
// aur jinko hum index se access kar sakte hai
// example :- string 

// 67.js
// Sets
// Order is not guaranteed
// unique items only (no duplicates allowed)
// Set -.add()
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);

// 68.js
// Maps
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// difference between maps and objects :
// objects can only have string or symbol as a key 
// in maps you can use anything as key like array, number, string 
// Map -.set(),.get()
// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});

// object literal : 
// key -> string 
// key -> symbol

// 69.js
// Clone using Object.assign
// const obj={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=obj;
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);
// actual cloning
// const obj2={...obj}; //method1
// const obj2=Object.assign({},obj); //method2

// 70.js
// optional chaining 
//if this line is absent then accessing the address.houseNumber can give error to avoid that use ?. instead of .
// const user  = {
//     firstName: "harshit",
//     address: {houseNumber: '1234'}
// }
// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);

// 71.js
// functions inside an object is method

// 72.js
// this === window 
// this inside an object is the object
// this.prop inside of an object is the value of the prop present inside of that object

// 73.js
// // call,apply,bind
// // call - using method of one object to use them with the values of another object 
// const user1={
//     firstName:"Anushka",
//     age:19,
//     about:function(){
//         console.log(this.firstName,this.age);
//     }
//     about2:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
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
// user1.about2.call(user2,"drawing");
// user1.about2.call(user2,"drawing","xyz");
// // apply
// user1.about2.apply(user2, ["guitar", "abc"]);
// // bind - does not prints directly
// const func=user1.about2.bind(user1,"guitar","xyz");
// func();

// short syntax for method
// const user1={
//     firstName:"Anushka",
//     age:8,
//     about(){
//         console.log(this.firstName,this.age);
//     }
// };
// user1.about();


// OOP2-9

// (1)Hardcore object

// (2)Create functions to create multiple objects
// 1.) function (that function create objects)
// 2.) add key value pair
// 3.) object ko return krega
// Template(function) -> Object

// (3)Store methods in different object
// in above case if we make more objects such as user2,user3,user4,......,million users then million "methods" will be created for them so the better alternative is given below
// in the below case, method is not created million times instead it is created once and then it is referred millions of times by the object

// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=userMethods.about; //
//     user.is18=userMethods.is18; //
//     return user;
// }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=createUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=createUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());

// (4)Solution using object.create
// Now the problem is if we want to create millions of method outside the object then we have to refer them millions of times in the object, So to deal with this problem more better alternative is given below

// // official ecmascript documentation
// // [[prototype]]
// // (__proto__===[[prototype]]) and (prototype) are different

// const obj1={
//     key1:"value1",
//     key2:"value2",
// }
// // const obj2={};
// // there is one more way to create an empty object
// const obj2=Object.create(obj1); //{}
// console.log(obj2);
// obj2.key3="value3";
// obj2.key2="unique";
// console.log(obj2.key2);
// console.log(obj2.key1);
// console.log(obj2); //new keys and values
// console.log(obj2.__proto__); //keys and values of obj1

// // above example continued
// const userMethods={
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(userMethods); //Object.create() Creates an empty object and along with that it gets reference i.e. proto of mentioned object
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user;
// }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=createUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=createUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1);
// console.log(user1.about());
// console.log(user2.about());

// // In Javascript, function ===> function + object
// function hello(){
//     console.log("hello world");
// }

// hello();
// // you can add your own properties
// hello.myOwnProperty="very unique value";
// console.log(hello.myOwnProperty);
// // console.log(hello.name);
// // name property ---> tells function name;
// // function provides more useful properties such as call,apply,bind
// console.log(hello.prototype); //{}
// // Only functions provide prototype property
// // const hello={key1:"value1",key2:"value2"}; //Object/dictionaries
// // const hello=["value1"]; //list/array
// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("protoype is not present");
// }

// // prototype
// hello.prototype.abc="abc";
// hello.prototype.xyz="xyz";
// hello.prototype.sing=function(){
//     return "lalalla";
// }
// console.log(hello.prototype);
// console.log(hello.prototype.sing());

// (5)link between proto n prototype,(proto-reference,prototype-simple object)
// function createUser(firstName,lastName,email,age,address){
//     const user=Object.create(createUser.prototype); //Object.create() Creates an empty object and along with that it gets reference i.e. proto of mentioned object
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     return user;
// }
// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// createUser.prototype.is18=function(){
//     return this.age>=18;
// }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=createUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=createUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());

// (6)new keyword
// this={}
// return {}
// links proto to prototype

// // constructor function
// function CreateUser(firstName,lastName,email,age,address){
//     // const user=Object.create(createUser.prototype); //{}
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
//     this.address=address;
// }
// CreateUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// CreateUser.prototype.is18=function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing=function(){
//     return "la la la la la";
// }
// // const user1=CreateUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// // const user2=CreateUser('xyz','abc','xyz@gmail.com',19,'xyz');
// // const user3=CreateUser('abc','xyz','abc@gmail.com',19,'abc');
// const user1=new CreateUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=new CreateUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=new CreateUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());

// for(let key in user1){
//     // console.log(key);
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     };
// }

// class are fake in javascript
// (7)constructor function with new keyword

// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//     console.log("constructor called");
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.email=email;
//     this.age=age;
//     this.address=address;
// }
// about(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// is18(){
//     return this.age>=18;
// }
// sing(){
//     return "la la la la la";
// }
// }
// const user1=new CreateUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=new CreateUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=new CreateUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());
// console.log(user1.is18());

// Till OOP2-9


















