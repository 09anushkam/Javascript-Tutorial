// 6:18:51-7:52:00

// important array methods

// forEach method
// const numbers=[4,2,5,8];
// function myFunc(number,index){
//     console.log(`index is ${index},number is ${number}`);
// }
// for(let i=0;i<numbers.length;i++){
//     myFunc(numbers[i],i);
// }
// numbers.forEach(myFunc);

// numbers.forEach(function(number,index){
//     console.log(`index is ${index},number is ${number}`);
// });

// numbers.forEach(function(number,index){
//     console.log(`index is ${index},number is ${number}*2=${number*2}`);
// });

// const users=[
//     {firstName:"Anushka",age:19},
//     {firstName:"Swarangi",age:16},
//     {firstName:"Samarth",age:17}
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user,index)=>{
//     console.log(user.firstName,index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


// MAP method
// map makes new array of the return value of the function which is it's input

// const numbers=[3,4,5,6,7,8];

// const sqr=function(number){
//     return number*number;
// }
// const sqrnums=numbers.map(sqr);

// const sqrnums=numbers.map(function(number){
//     return number*number;
// });

// const sqrnums=numbers.map((number)=>{
//     return number*number;
// });

// const sqrnums=numbers.map((number,index)=>{
//     return `${index} ${number*number}`;
// });

// console.log(sqrnums);

// const users=[
//     {firstName:"Anushka",age:19},
//     {firstName:"Swarangi",age:16},
//     {firstName:"Samarth",age:17}
// ]
// const userNames=users.map((users)=>{
//     return userNames.firstName;
// });
// console.log(userNames);

// filter method
// const numbers=[1,3,2,6,4,8];

// const isEven=function(number){
//     return number%2===0;
// }
// const evenNumbers=numbers.filter(isEven);
// console.log(evenNumbers);

// const evenNumbers=numbers.filter((number)=>{
//     return number%2===0;
// });
// console.log(evenNumbers);

// Reduce method

// const numbers=[1,2,3,4,5];
// const sum=numbers.reduce((accumulator,cuurentValue)=>{
//     return accumulator+cuurentValue;
// });
// console.log(sum);

// const userCart=[
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"TV",price:20000},
// ]
// const totalAmount=userCart.reduce((totalPrice,currentProduct)=>{
//     return totalPrice+currentProduct.price;
// },0);
// console.log(totalAmount);

// sort method
// ASCII TABLE
// char:ascii value

// 0:48
// 1:49
// 2:50
// 3:51
// 4:52
// 5:53
// 6:54
// 7:55
// 8:56
// 9:57

// ::58
// ;:59
// <:60
// =:61
// >:62
// ?:63
// @:64

// A:65
// B:66
// C:67
// D:68
// E:69
// F:70
// G:71
// H:72
// I:73
// J:74
// K:75
// L:76
// M:77
// N:78
// O:79
// P:80
// Q:81
// R:82
// S:83
// T:84
// U:85
// V:86
// W:87
// X:88
// Y:89
// Z:90

// [:91
// \:92
// ]:93
// ^:94
// _:95
// `:96

// a:97
// b:98
// c:99
// d:100
// e:101
// f:102
// g:103
// h:104
// i:105
// j:106
// k:107
// l:108
// m:109
// n:110
// o:111
// p:112
// q:113
// r:114
// s:115
// t:116
// u:117
// v:118
// w:119
// x:120
// y:121
// z:122

// sort-changes original array
// forEach-cannot change original array
// map-creates new array with modified or same elements
// filter-creates new array with filtered values


// sort()

// const numbers=[5,9,1200,410,3000];
// console.log(numbers.sort());
// ascending
// numbers.sort((a,b)=>{
//     return a-b;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// descending
// numbers.sort((a,b)=>{
//     return b-a;
// });

// explaination-ascending
// 1200,410
// a-b ---> 790 (positive>0) ---> b,a
// 410,1200
// 5,9
// a-b ---> -4 (negative<0) ---> a,b
// 5,9

// price lowToHigh highToLow
// const products=[
//     {productId:1,productName:"p1",price:300},
//     {productId:2,productName:"p2",price:3000},
//     {productId:3,productName:"p3",price:200},
//     {productId:4,productName:"p4",price:8000},
//     {productId:5,productName:"p5",price:900},
//     {productId:6,productName:"p6",price:500},
// ]
// // lowToHigh
// const lowToHigh=products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// });
// console.log(lowToHigh);
// // highToLow
// const highToLow=products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// });
// console.log(highToLow);

// find method - returns the first occurrence

// const myArray=["Hello","cat","dog","lion"];
// function isLength3(string){
//     return string.length===3;
// }
// const ans=myArray.find(isLength3);
// const ans=myArray.find((string)=>{
//     return string.length===3;
// });
// console.log(ans);

// const users=[
//     {userId:1,userName:"Anushka"},
//     {userId:2,userName:"B"},
//     {userId:3,userName:"C"},
//     {userId:4,userName:"D"},
//     {userId:5,userName:"E"},
//     {userId:6,userName:"F"},
// ];
// const myUser=users.find((user)=>user.userId===3);
// console.log(myUser);

// every method - returns boolean

// const numbers=[2,4,6,9,10];
// const ans=numbers.every((number)=>number%2===0);
// console.log(ans);

// const userCart=[
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"TV",price:20000},
// ]
// const lessthan30k=userCart.every((cartItem)=>cartItem.price<30000);
// console.log(lessthan30k);

// some method
// const numbers=[3,5,8,9];
// const ans=numbers.some((number)=>number%2===0);
// console.log(ans);

// const userCart=[
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"laptop",price:22000},
//     {productId:3,productName:"TV",price:20000},
//     {productId:4,productName:"macbook",price:250000},
// ]
// const ans=userCart.some((cartItem)=>cartItem.price>100000);
// console.log(ans);

// fill method
// value,start,end

// const myArray=new Array(3).fill(0);
// console.log(myArray);  //array with all(10) elem as 0

// const myArray=[1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);


// splice method - changes original array
// start,delete,insert

const myArray=['item1','item2','item3','item4'];
// delete
// myArray.splice(1,1);
// console.log(myArray);
// const deletedItem=myArray.splice(1,2);
// console.log("deleted item",deletedItem);
// insert
myArray.splice(1,0,'inserted item');
console.log(myArray);
// insert and delete together
const deletedItem=myArray.splice(1,2,"inserted item","inserted item2");
console.log("deleted item",deletedItem);
console.log(myArray);

// forEach , sort , filter , map , find , Every , Some , fill , splice

