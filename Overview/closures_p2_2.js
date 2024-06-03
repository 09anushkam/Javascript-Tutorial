// closures
// function returning function

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }
// const ans = outerFunction();
// console.log(ans);
// ans();


// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName;
// }
// const ans=printFullName("anushka","murade");
// console.log(ans);
// ans();

// function hello(x){
//     const a="varA";
//     const b="varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans=hello("arg");
// ans();


// function exponentialFunc(pow){
//     return function(number){
//         return number**pow;
//     }
// }
// // const exponentialFunc=(pow)=>{
// //   return (number)=>{
// //        return number**pow;
// //    }
// // }
// // const exponentialFunc=(pow)=>(number)=>number**pow;
// const sq=exponentialFunc(2);
// const ans=sq(3);
// console.log(ans);
// const cube=exponentialFunc(3);
// const ans2=cube(3);
// console.log(ans2);


// function func(){
//     let counter=0;
//     return function(){
//         if(counter<1){
//             console.log("Hii,you called me!");
//             counter++;
//         }else{
//             console.log("Mai already ek baar call ho chuka hu");
//         }
//     }
// }
// const myFunc=func();
// myFunc();
// myFunc();




































































