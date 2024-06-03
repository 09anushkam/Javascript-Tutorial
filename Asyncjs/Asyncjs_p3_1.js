// JS - synchronous programming language and it is single threaded
// Asynchronous js

// after x milisec that func or that line of code will run
// // setTimeout(func,time in millisec);
// console.log("script starts");
// // function hello(){
// //     console.log("hello world");
// // }
// // setTimeout(hello,2000);
// setTimeout(()=>{
//     console.log("inside setTimeout");
// },2000);
// console.log("script ends");

// setTimeout() with 0ms;
// console.log("script starts");
// setTimeout(()=>{
//     console.log("inside setTimeout");
// },0);
// for(let i=1;i<100;i++){
//     console.log("....");
// }
// console.log("script ends");

// clearTimeout();
// console.log("script starts");
// const id=setTimeout(()=>{
//     console.log("inside setTimeout");
// },0);
// for(let i=1;i<100;i++){
//     console.log("....");
// }
// console.log("settimeout id is",id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script ends");

// setInterval()
// console.log("script starts");
// setInterval(()=>{
//     console.log(Math.floor(Math.random()*11));
// },1000);
// console.log("script ends");

// button
// Asyncjs_p3_1.html
// he has used 126 instead of 256
// const body=document.body;
// const button=document.querySelector("button");
// const intervalId=setInterval(()=>{
//     const red=Math.floor(Math.random()*256);
//     const green=Math.floor(Math.random()*256);
//     const blue=Math.floor(Math.random()*256);
//     const rgb=`rgb(${red},${green},${blue})`;
//     body.style.background=rgb;
// },1000);
// button.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     button.textContent=body.style.background; //imp
// });

// understand callback
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }
// // or
// function myFunc(func){
//     console.log("Function is doing task 1");
//     func();
// }
// function myFunc2(){
//     console.log("Function is doing task 2");
// }
// myFunc(myFunc2);

// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }
// myFunc(function myFunc2(){
//     console.log("Function is doing task 2");
// });

// function getTwoNumbersAndAdd(number1,number2,callback){
//     console.log(number1,number2);
//     callback(number1,number2);
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// getTwoNumbersAndAdd(4,6,addTwoNumbers);

// function getTwoNumbersAndAdd(number1,number2,callback){
//     if(typeof number1=="number" && typeof number2=="number"){
//         callback(number1,number2);
//     }else{
//         console.log("wrong data type.");
//     }
// }
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// // getTwoNumbersAndAdd(4,5,addTwoNumbers);
// getTwoNumbersAndAdd("4","5",addTwoNumbers);

// function getTwoNumbersAndAdd(number1,number2,callback){
//     if(typeof number1==="number" && typeof number2==="number"){
//         callback(number1,number2);
//     }else{
//         console.log("wrong data type.");
//     }
// }
// getTwoNumbersAndAdd("4","5",(num1,num2)=>{
//     console.log(num1+num2);
// });


// function getTwoNumbersAndAdd(number1,number2,onSuccess,onFailure){
//     if(typeof number1==="number" && typeof number2==="number"){
//         onSuccess(number1,number2);
//     }else{
//         onFailure();
//     }
// }
// getTwoNumbersAndAdd(4,4,(num1,num2)=>{
//     console.log(num1+num2);
// },()=>{
//     console.log("Wrong data type");
// });


// Callback in Async js
// callbacks,callback hell,pyramid of doom

// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");

// // (sequence)
// setInterval(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet";
// },1000);
// setInterval(()=>{
//     heading2.textContent="Heading 2";
//     heading2.style.color="purple";
// },2000);
// setInterval(()=>{
//     heading3.textContent="Heading 3";
//     heading3.style.color="red";
// },3000);
// setInterval(()=>{
//     heading4.textContent="Heading 4";
//     heading4.style.color="pink";
// },4000);

// // (simultaneously)
// setInterval(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet";
// },1000);
// setInterval(()=>{
//     heading2.textContent="Heading 2";
//     heading2.style.color="purple";
// },1000);
// setInterval(()=>{
//     heading3.textContent="Heading 3";
//     heading3.style.color="red";
// },1000);
// setInterval(()=>{
//     heading4.textContent="Heading 4";
//     heading4.style.color="pink";
// },1000);

// (sequence) (nested) 
// setInterval(()=>{
//     heading1.textContent="Heading 1";
//     heading1.style.color="violet";
//     setInterval(()=>{
//         heading2.textContent="Heading 2";
//         heading2.style.color="purple";
//     },1000);
// },1000);

// Text         Delay       Color
// one          1s          Violet
// two          2s          Purple
// three        2s          Red
// four         1s          Pink
// five         2s          green
// six          3s          blue
// seven        1s          brown

// callback hell - func call goes in sequence
// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");
// setInterval(()=>{
//     heading1.textContent="one";
//     heading1.style.color="violet";
//     setInterval(()=>{
//         heading2.textContent="two";
//         heading2.style.color="purple";
//         setInterval(()=>{
//             heading3.textContent="three";
//             heading3.style.color="red";
//             setInterval(()=>{
//                 heading4.textContent="four";
//                 heading4.style.color="pink";
//                 setInterval(()=>{
//                     heading5.textContent="five";
//                     heading5.style.color="green";
//                     setInterval(()=>{
//                         heading6.textContent="six";
//                         heading6.style.color="blue";
//                         setInterval(()=>{
//                             heading7.textContent="seven";
//                             heading7.style.color="brown";
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);

// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");
// function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent=text;
//             element.style.color=color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//                 if(onFailureCallback){
//                     onFailureCallback();
//                 }
//             }
//     },time)
// }
// // pyramid of doom
// changeText(heading1,"one","violet",1000,()=>{
//     changeText(heading2,"two","purple",2000,()=>{
//         changeText(heading3,"three","red",1000,()=>{
//             changeText(heading4,"four","pink",1000,()=>{
//                 changeText(heading5,"five","green",2000,()=>{
//                     changeText(heading6,"six","blue",1000,()=>{
//                         changeText(heading7,"seven","brown",1000,()=>{
    
//                         },()=>{console.log("Heading 7 does not exist")})
//                     },()=>{console.log("Heading 6 does not exist")})
//                 },()=>{console.log("Heading 5 does not exist")})
//             },()=>{console.log("Heading 4 does not exist")})
//         },()=>{console.log("Heading 3 does not exist")})
//     },()=>{console.log("Heading 2 does not exist")})
// },()=>{console.log("Heading 1 does not exist")});

// Promise
// const bucket=['coffee','chips','salt','vegetables','rice'];
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         // resolve("Fried Rice");
//         resolve({value:"Fried Rice"});
//     }else{
//         // reject("coudn't do it");
//         reject(new Error("Something is missing from bucket"));
//     }
// })

// // friedRicePromise.then(
// //     // jab promise resolve hoga
// //     (myFriedRice)=>{
// //     console.log("lets eat",myFriedRice);
// // },  // jab promise reject hoga
// // (error)=>{
// //     console.log(error);
// // });
// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myFriedRice)=>{
//     console.log("lets eat",myFriedRice);
// }).catch((error)=>{console.log(error)}) // jab promise reject hoga


// 1:45:20
// console.log("script start");
// const bucket=['coffee','chips','vegetables','salt','rice'];
// const friedRicePromise=new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// });
// friedRicePromise.then(
//     (myfriedrice)=>{
//         console.log("lets eat",myfriedrice);
//     }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// );
// setTimeout(()=>{
//     console.log("Hello from setTimeout");
// },0);
// for(let i=0;i<=100;i++){
//     // console.log(Math.floor(Math.random()*101),i);
//     console.log(Math.random(),i);
// }
// console.log("script end!!");

// Function returning a promise
// function ricePromise(){
// const bucket=['coffee','chips','vegetables','salt','rice'];
// return new Promise((resolve,reject)=>{
//         if(bucket.includes("vegetables")&&bucket.includes("salt")&&bucket.includes("rice")){
//             resolve({value:"friedrice"});
//         }else{
//             reject("could not do it");
//         }
//     });
// }
// ricePromise().then(
//     (myfriedRice)=>{
//         console.log("lets eat",myfriedRice);
//     }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )

// Promise and setTimeout
// 2:00:44
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value=true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }

// myPromise().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")})

// Promise.resolve
// Promise chaining

// const myPromise=Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("fool");
//     })
// }
// myPromise().then((value)=>{
//     console.log(value);
//     value+="ish";
// //  return Promise.resolve(value);
//     return value; //if we return nothing the value of the returned promise will be undefined
// }).then((value)=>{
//     console.log(value);
//     value+="ness";
//     return value;
// }).then((value)=>{
//     console.log(value);
// })

// Callback hell to flat code
// const heading1=document.querySelector(".heading1");
// const heading2=document.querySelector(".heading2");
// const heading3=document.querySelector(".heading3");
// const heading4=document.querySelector(".heading4");
// const heading5=document.querySelector(".heading5");
// const heading6=document.querySelector(".heading6");
// const heading7=document.querySelector(".heading7");
// function changeText(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent=text;
//                 element.style.color=color;
//                 resolve();
//             }else{
//                   reject("element not found");  
//                 }
//         },time)
//     })
// }
// // note: don't forget to return the promise otherwise the value of next `then` will becomes undefined
// changeText(heading1,"one","violet",1000).then(()=>{
//     return changeText(heading2,"two","indigo",1000)
// }).then(()=>{
//     return changeText(heading3,"three","blue",1000)
// }).then(()=>{
//     return changeText(heading4,"four","green",1000)
// }).then(()=>{
//     return changeText(heading5,"five","yellow",1000)
// }).then(()=>{
//     return changeText(heading6,"six","orange",1000)
// }).then(()=>{
//     return changeText(heading7,"seven","red",1000)
// }).catch((error)=>{alert(error);})
// // or
// changeText(heading1,"one","violet",1000)
// .then(()=>changeText(heading2,"two","indigo",1000))
// .then(()=>changeText(heading3,"three","blue",1000))
// .then(()=>changeText(heading4,"four","green",1000))
// .then(()=>changeText(heading5,"five","yellow",1000))
// .then(()=>changeText(heading6,"six","orange",1000))
// .then(()=>changeText(heading7,"seven","red",1000))
// .catch((error)=>{alert(error);})

































