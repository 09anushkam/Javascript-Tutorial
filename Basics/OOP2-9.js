// 9:14:06 - 10:04:00

// (1)Hardcore object
// const user={
//     firstName:"Anushka",
//     lastName:"Murade",
//     email:"anushkamurade@gmail.com",
//     age:19,
//     address:"House Number,Colony,pincode,State",
//     about:function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// const aboutUser=user.about();
// console.log(aboutUser);

// (2)Create functions to create multiple objects
// function (that function create object)
// 2.) add key value pair
// 3.) function object return krega

// Template -> Object // Class
// function createUser(firstName,lastName,email,age,address){
//     const user={}; //user object
//     user.firstName=firstName;
//     user.lastName=lastName;
//     user.email=email;
//     user.age=age;
//     user.address=address;
//     user.about=function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// console.log(user1);
// const is18=user1.is18();
// console.log(is18);
// const about=user1.about();
// console.log(about);

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
//     user.about=userMethods.about; // taking reference from above object
//     user.is18=userMethods.is18; // taking reference from above object
//     return user;
// }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=createUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=createUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());

// (4)Solution using object.create
// Now the problem is if we want to create millions of method outside the object then we have to refer them millions of times in the object, So to deal with this problem more better alternative is given below

// const obj1={
//     key1:"value1",
//     key2:"value2",
// }

// official ecmascript documentation
// [[prototype]]
// (__proto__===[[prototype]]) and (prototype) are different

// const obj2={};
// there is one more way to create an empty object
// const obj2=Object.create(obj1); //{}
// console.log(obj2);
// obj2.key3="value3";
// obj2.key2="unique";
// console.log(obj2.key2);
// console.log(obj2.key1);
// console.log(obj2); //new keys and values
// console.log(obj2.__proto__); //keys and values of obj1

// above example continued
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


// In Javascript, function ===> function + empty object {}
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
// // const hello={key1:"value1",key2:"value2"}; //Object,dictionaries
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
// console.log(createUser.prototype); // {}
// createUser.prototype.about=function(){
//     return `${this.firstName} is ${this.age} years old.`;
// }
// createUser.prototype.is18=function(){
//     return this.age>=18;
// }
// console.log(createUser.prototype); // { about: [Function (anonymous)], is18: [Function (anonymous)] }
// const user1=createUser('anushka','murade','anushkamurade@gmail.com',19,'xyz');
// const user2=createUser('xyz','abc','xyz@gmail.com',19,'xyz');
// const user3=createUser('abc','xyz','abc@gmail.com',19,'abc');
// console.log(user1.about());
// console.log(user2.about());

// (6)new keyword
// this={}
// return {}
// links proto to prototype

// constructor function
// function CreateUser(firstName,lastName,email,age,address){
//     // const user=Object.create(createUser.prototype); //{}
//     // user.firstName=firstName;
//     // user.lastName=lastName;
//     // user.email=email;
//     // user.age=age;
//     // user.address=address;
//     // return user;
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

// this is till constructor function with new keyword





