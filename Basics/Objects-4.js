// 3:57:10 - 4:51:00
"use strict";

// OBJECTS - reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create object
// const person={name:"Anu",age:19};
// const person={
//     name:"Anushka",
//     age:19,
//     hobbies:["coding","drawing","sleeping"]
// }
// console.log(person);

// how to access data from objects
// console.log(person.name); //dot notation
// console.log(person["name"]); //bracket notation
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects
// person.gender="female";
// person["gender"]="female";
// console.log(person);

// Difference between dot and bracket notation:
// const key="email";
// const person={
//     name:"Anushka",
//     age:19,
//     "person hobbies":["coding","drawing","sleeping"]
// }
// // console.log(person["person hobbies"]); //benifit no.1 can include key name with spaces
// // person.key="anushkamurade@gmail.com";
// // person["key"]="anushkamurade@gmail.com";
// person[key]="anushkamurade@gmail.com"; //benifit no.2 can helps in getting key value (note-don't use "")
// console.log(person);

// how to iterate object
// const key="email";
// const person={
//     name:"Anushka",
//     age:19,
//     "person hobbies":["coding","drawing","sleeping"]
// }
// for in loop
// Object.keys

// for(let key in person){
//     // console.log(key);
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : ",person[key]);
// }

// console.log(typeof(Object.keys(person)),Object.keys(person));
// const val=Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// computed properties
// const key1="objkey1";
// const key2="objkey2";
// const value1="myvalue1";
// const value2="myvalue2";
// // Don't use this.....
// // const obj={
// //     objkey1:"myvalue1",
// //     objkey2:"myvalue2"
// // }
// // const obj={
// //     key1:value1,
// //     key2:value2
// // }
// // Instead Use this
// const obj={
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj);

// Spread Operator (note only strings are iterable numbers are not iterable)
// const array1=[1,2,3];
// const array2=[4,5,6];
// // const newArray=[...array1,...array2,34,56];
// // const newArray=[..."abc"];
// const newArray=[..."1234567890"];
// console.log(newArray);

// spread operator in objects
// const obj1={
//     key1:"value1",
//     key2:"value2",
//     key1:"value59"
// }
// console.log(obj1);
// const obj1={
//         key1:"value1",
//         key2:"value2"
//     };
//     const obj2={
//         key1:"valueUnique",
//         key3:"value3",
//         key4:"value4"
//     };
// const newObject1={...obj2,...obj1};
// const newObject2={...obj1,...obj2};
// console.log(newObject1);
// console.log(newObject2);

// Object destructuring
// const band={
//     bandName: "led zeppelin",
//     famousSong: "stairway to heaven",
//     year:1968,
//     anotherFamousSong:"kashmir"
// };
// // const bandName=band.bandName;
// // const famousSong=band.famousSong;
// // console.log(bandName,famousSong);
// // const{bandName,famousSong}=band;
// // console.log(bandName);
// let{bandName:var1,famousSong:var2}=band; //here the name of key bandName has been changed to var1
// console.log(var1);
// let{bandName,famousSong,...restProps}=band;
// console.log(restProps);

// objects inside array
// very useful in real world applications
// const users=[
//     {userId:1,firstName:'anushka',gender:'female'},
//     {userId:2,firstName:'abc',gender:'male'},
//     {userId:3,firstName:'xyz',gender:'female'},
// ]
// for(let user of users){
//     // console.log(users);
//     // console.log(users.userId);
//     console.log(users.firstName);
// }

// Nested Destructuring
// const users=[
//     {userId:1,firstName:'anushka',gender:'female'},
//     {userId:2,firstName:'abc',gender:'male'},
//     {userId:3,firstName:'xyz',gender:'female'},
// ]
// // const [user1,user2,user3]=users;
// // console.log(user1);
// // const [{firstName}, ,{gender}]=users;
// // console.log(firstName);
// // console.log(gender);
// const [{firstName:user1firstName,userId}, ,{gender:user3gender}]=users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);



































