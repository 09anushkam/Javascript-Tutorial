// AJAX : Asynchronous javascript n XML
// HTTP request

// is a set of "web development techniques"
// using many web technologies on the "client-side"
// to create asynchronous web applications

// With Ajax, Web applications can send and retrieve
// data from a server asynchronous (in the background)
// without interfering with the display and
// behaviour of the existing page

// We don't use data in XML format anymore
// we use JSON now

// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)


// CRUD Operation in js :
// post - create
// get - read
// put - update , patch - small changes(not complete update)
// delete - delete

// HTTP status code
// const URL="https://jsonplaceholder.typicode.com/posts"; //wrong info will lead to (status code - 404 not found)
// const xhr=new XMLHttpRequest();
// console.log(xhr);

// // step 1
// // mdn xhr ready state
// // console.log(xhr.readyState); //0
// xhr.open("GET",URL);
// // console.log(xhr.readyState); //1
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState); //2,3,4
//     if(xhr.readyState===4){
//         const response=xhr.response; //string
//         const data=JSON.parse(response); //string->object
//         console.log(typeof data);
//     }
// }
// xhr.send();

// const URL="https://jsonplaceholder.typicode.com/posts"; 
// const xhr=new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload=function(){
//     // console.log(xhr.readyState); //4
//     const response=xhr.response;
//     const data=JSON.parse(response);
// }
// xhr.send();

// Error Handling
// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr=new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload=()=>{
//     if(xhr.status>=200 && xhr.status<300){
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         // console.log(data);
//         const id=data[3].id;
//         console.log(id);
//     }else{
//         console.log("something went wrong");
//     }
// }
// xhr.onerror=()=>{
//     console.log("Network Error");
// }
// xhr.send();

// using callback
// const URL="https://jsonplaceholder.typicode.com/posts";
// const xhr=new XMLHttpRequest();
// xhr.open("GET",URL);
// xhr.onload=()=>{
//     if(xhr.status>=200 && xhr.status<300){
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         // console.log(data);
//         const id=data[3].id;
//         const xhr2=new XMLHttpRequest();
//         const URL2=`${URL}/${id}`;
//         console.log(URL2);
//         xhr2.open("GET",URL2);
//         xhr2.onload=()=>{
//          const data2=JSON.parse(xhr2.response);
//          console.log(data2);   
//         }
//         xhr2.send();
//     }else{
//         console.log("something went wrong");
//     }
// }
// xhr.onerror=()=>{
//     console.log("Network Error");
// }
// xhr.send();

// using promise
// const URL="https://jsonplaceholder.typicode.com/posts";
// function sendRequest(method,url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();
//         xhr.open(method,url);
//         xhr.onload=()=>{
//             if(xhr.status>=200 && xhr.status<300){
//                 resolve(xhr.response);
//             }else{
//                 reject(new Error("Something went wrong"));
//             }
//         }
//         xhr.onerror=()=>{
//             reject(new Error("Something went wrong"));
//         }
//         xhr.send();
//     })
// }

// sendRequest("GET",URL)
// .then((response)=>{
//     const data=JSON.parse(response);
//     // console.log(data);
//     return data;
// }).then((data)=>{
//     // console.log(data);
//     // console.log(data[3].id);
//     const id=data[3].id;
//     return id;
// }).then((id)=>{
//     // console.log(id);
//     const url=`${URL}/${id}`;
//     return sendRequest("GET",url);
// }).then((newResponse)=>{
//     // console.log(newResponse);
//     const newData=JSON.parse(newResponse);
//     console.log(newData);
// }).catch((error)=>{
//     console.log(error);
// })

// fetch API ✔
// const URL="https://jsonplaceholder.typicode.com/posts";
// // const promise=fetch(URL);
// // console.log(promise);

// fetch(URL).then((response)=>{
//     if(response.ok){
//     // console.log(response);
//     return response.json();
//     }else{
//         throw new Error("Something went wrong");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("inside catch");
//     console.log(error);
// })


// Creating Resource
// const URL="https://jsonplaceholder.typicode.com/posts";
// fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then((response)=>{
//     if(response.ok){
//     // console.log(response);
//     return response.json();
//     }else{
//         throw new Error("Something went wrong");
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("inside catch");
//     console.log(error);
// })

// Consume Promises Using Async Await

// console.log("script starts");
// const URL="https://jsonplaceholder.typicode.com/posts";

// // async function getPosts(){
// //     const response=await fetch(URL);
// //     if(!response.ok){
// //         throw new Error("Something went wrong");
// //     }
// //     const data=await response.json();
// //     return data;
// // }

// const getPosts=async()=>{
//     const response=await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data=await response.json();
//     return data;
// }

// // const myData=getPosts();
// // console.log(myData);

// getPosts().then((myData)=>{
//     console.log(myData);
// }).catch((error)=>{
//     console.log("inside catch");
//     console.log(error);
// })

// console.log("script ends");



















































