// 7:52:20 - 8:38:42

// iterables
// jispe hum for of loop laga sakein
// string,array are iterable

// array like object
// jinke pass length property hoti hai
// aur jinko hum index se access kr sakte hai
// example:-string

// string/array like object - iterable
// const firstName="Anushka";
// console.log(firstName.length);
// console.log(firstName[2]);
// for(let char of firstName){
//     console.log(char);
// }

// array - iterable
// const items=['item1','item2','item3'];
// for(let item of items){
//     console.log(item);
// }

// object - not iterable
// const users={'key1':'value1','key2':'value2'};
// for(let user of users){
//     console.log(user);
// }


// Sets - iterable
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers=new Set([1,2,3,3]);
// console.log(numbers);
// console.log(numbers[2]);

// const items=['item1','item2','item3'];
// const numbers=new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(7);
// numbers.add(items);
// numbers.add(items);
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);

// // not working .has() method
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is absent");
// }

// console.log(numbers);
// for(let number of  numbers){
//     console.log(number);
// }

// const myArray=[1,2,4,4,5,6,5,6];
// const uniqueElements=new Set(myArray);
// console.log(uniqueElements);
// // console.log(uniqueElements.length); // undefined
// console.log(myArray);
// let length=0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length);


// object literals -> for in loop is applicable
// key -> string
// key -> symbol
// const person={
//     firstName:"Anushka",
//     age:7,
//     1:"one",
// };
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// Maps - iterable,for of loop is applicable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol as key
// in maps you can use anything as key
// like Array,number,string
// key -> any type
// map has set and get method to add and access the values
// key value pair

// const person=new Map();
// // console.log(typeof person);
// person.set('firstName','Anushka');
// person.set('age',7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({one:1,two:2,three:3},'onetwothree');
// // console.log(person.firstName);
// // console.log(person['firstName']);
// console.log(person.get('firstName'));
// console.log(person.get('age'));
// console.log(person.get(1));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key,typeof key);
// }

// const person=new Map();
// person.set('firstName','Anushka');
// person.set('age',7);
// person.set(1,'one');
// // for(let key of person){
// //     console.log(key);
// //     console.log(typeof key);
// //     console.log(Array.isArray(key));
// // }
// // destructing
// for(let [key,value] of person){
//     console.log(key,value);
// }
// // const person=new Map([['firstName','Anushka'],['age',19]]);
// // console.log(person);


// const person1={
//     id:1,
//     firstName:"Anushka",
// }
// const person2={
//     id:2,
//     firstName:"Anu",
// }
// const extraInfo=new Map();
// extraInfo.set(person1,{age:8,gender:"female"});
// extraInfo.set(person2,{age:10,gender:"female"});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(person2.id);
// console.log(extraInfo.get(person2).id); //undefined
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).age);

// Clone using Object.assign
// changes are also getting stored in original object in heap memory
// const obj={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=obj;
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);

// Actual cloning
// const obj2={...obj}; //method1 - destructuring
// const obj2=Object.assign({},obj); //method2
// obj.key3="value3";
// console.log(obj);
// console.log(obj2);

// Optional chaining
// const user={
//     firstName:"Anushka",
//     address:{houseNumber:'1234'} //if this line is absent then accessing the address.houseNumber or user.address can give error to avoid that use ?. instead of .
// }
// console.log(user.firstName);
// console.log(user.address); // error
// console.log(user?.address); // undefined
// console.log(user.address.houseNumber); // error
// console.log(user?.address?.houseNumber);  // undefined


