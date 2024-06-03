// Events
// 6:04:54
// click
// mouseover

// add event
// method---> addEventListener;


// linked to DOM_p2_3.html
// const btn=document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("You clicked me!!!");
// }
// btn.addEventListener("click",clickMe);

// const btn=document.querySelector(".btn-headline");
// btn.addEventListener("click",function clickMe(){
//     console.log("You clicked me!!!");
// });

// const btn=document.querySelector(".btn-headline");
// btn.addEventListener(()=>{
//     console.log("You clicked me!!!");
// });

// this keyword
// const btn=document.querySelector(".btn-headline");
// arrow function
// btn.addEventListener("click",myFunc=()=>{
//     console.log("You clicked me!!!");
//     console.log("value of this");
//     console.log(this); //window
// });
// normal function
// btn.addEventListener("click",function myFunc(){
//     console.log("You clicked me!!!");
//     console.log("value of this");
//     console.log(this); //button
// });

// linked to Events_p2_5.html
// Click events on multiple buttons
// const firstButton=document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("You Clicked Me");
// })

// for of loop
// // normal func
// const allButtons=document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         // console.log("You clicked me!!!");
//         // console.log(this);
//         console.log(this.textContent);
//     });
// }
// // arrow func
// for(let button of allButtons){
//     button.addEventListener("click",()=>{
//         // console.log("You clicked me!!!");
//         // console.log(this);
//         console.log(this.textContent);
//     });
// }
// // normal for loop
// for(let i=0;i<allButtons.length;i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this);
//     })
// }
// // forEach
// allButtons.forEach(function(button){
//     button.addEventListener("click",function(){
//         console.log(this);
//     });
// });

// event Object
// target
// currentTarget
// const allButtons=document.querySelectorAll(".my-buttons button");
// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         // console.log(e.target);
//         console.log(e.currentTarget);
//     })
// }

// console.log("script starts!!");
// const allButtons=document.querySelectorAll(".my-buttons button");
// allButtons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         let num=0;
//         for(let i=0;i<=1000000;i++){
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent,num);
//     })
// })
// let outerVar=0;
// for(let i=0;i<=1000000;i++){
//     outerVar+=i;
// }
// console.log("value of outer variables is",outerVar);
// console.log("script end!!");

// practice
// const allButtons=document.querySelectorAll(".my-buttons button");
// // console.log(allButtons.length);
// allButtons.forEach(button=>{
//     button.addEventListener("click",(e)=>{
//         // console.log(e.target.textContent);
//         e.target.style.backgroundColor="yellow";
//         e.target.style.color="grey";
//     })
// })

// linked to DOM_p2_3.html
// keypress event
// mouseover event
// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })
// const mainButton=document.querySelector(".btn-headline");
// console.log(mainButton);
// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouse over occurred");
// })
// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouse leave occurred");
// })

// Events_p2_7.html
// event bubbling / event propagation
// clicked on child:child->parent->grandparent->body
// const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");
// child.addEventListener("click",()=>{
//     console.log("child");
// })
// parent.addEventListener("click",()=>{
//     console.log("parent");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("grandparent");
// })
// document.body.addEventListener("click",()=>{
//     console.log("body");
// })

// event capturing(if true,otherwise event bubbling is followed)
// clicked on child:body->grandparent->parent->child(if boolean value i.e. 3rd arguement is true)
// const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");
// child.addEventListener("click",()=>{
//     console.log("child");
// },true)
// parent.addEventListener("click",()=>{
//     console.log("parent");
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("grandparent");
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("body");
// },true)

// child.addEventListener("click",()=>{
//     console.log("child");
// })
// parent.addEventListener("click",()=>{
//     console.log("parent");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("grandparent");
// }) 
// document.body.addEventListener("click",()=>{
//     console.log("body");
// })

// event delegation
// const grandparent=document.querySelector(".grandparent");
// grandparent.addEventListener("click",(e)=>{
//     console.log(e.target);
// })

// DOM_p2_3.html
// 7:49:25
// project - add todo,done,remove buttons->addEventListener
const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //prevents refreshing 
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value=""; //removes that value from placeholder
});

todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
    }
});



