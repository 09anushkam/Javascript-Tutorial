// DOM
// document object model

// Select element using getElementById()
// // console.log(typeof document.getElementById("main-heading")); //object
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading);

// Select element using querySelector()
// const mainHeading=document.querySelector("#main-heading");
// const header=document.querySelector(".header");
// const navItem=document.querySelectorAll(".nav-item");
// console.log(mainHeading);
// console.log(header);
// console.log(navItem);

// Change Text
// textContent - all text even hidden ones and innerText
// const mainHeading=document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);
// mainHeading.textContent="Changed Text"; //manipulation of text
// console.log(mainHeading.textContent);

// Change the Styles of elements
// const mainHeading=document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color="yellow"; //manipulation of style
// mainHeading.style.backgroundColor="orange"; //manipulation of style
// mainHeading.style.border="5px solid brown"; //manipulation of style

// getAttribute() and setAttribute()
// const link=document.querySelector("a");
// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","https://codprog.com"); //manipulate the attribute
// console.log(link.getAttribute("href"));
// const inputElement=document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// 1.) get multiple elements items using getElementsByClassName()
// array like object ---> indexing, length property
// we can't use forEach method to iterate through HTMLCollection
// we can use simple for loop , for of loop
// const navItems=document.getElementsByClassName("nav-item"); //HTMLCollection
// console.log(navItems);
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));

// let navItems=document.getElementsByTagName("a");
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem=navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// }

// navItems = Array.from(navItems); // it is necessary to convert NodeList->Array to apply forEach because i used getElementsByTagName()
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });
// console.log(Array.isArray(navItems));

// 2.) get multiple elements items using querySelectorAll()
// const navItems=document.querySelectorAll(".nav-item"); //NodeList
// console.log(navItems);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems); // not necessary to convert NodeList->Array to apply forEach because i used querySelectorAll()
// console.log(Array.isArray(navItems));
// // simple for loop , for of loop , forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);

// innerHTML
// const headline=document.querySelector(".headline");
// console.log(headline);
// console.log(headline.innerHTML);
// headline.innerHTML="<h1>Inner HTML changed</h1>";
// headline.innerHTML+="<button class=\"btn\">Learn More</button>";
// console.log(headline.innerHTML);

// 5:17:24
// classList
// add/remove a class
// const sectionTodo=document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);
// sectionTodo.classList.remove("bg-dark");
// console.log(sectionTodo.classList);
// const ans=sectionTodo.classList.contains("container");
// console.log(ans);

// Toggle - removes an element if it is already present/adds an element if it is absent
// const sectionTodo=document.querySelector(".section-todo");
// sectionTodo.classList.toggle("bg-dark");
// console.log(sectionTodo.classList);
// const header=document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");


// Add new HTML elements to page

// innerHTML to add html element
// const todoList=document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// // todoList.innerHTML="<li>New Todo</li>"; //replace-dos
// todoList.innerHTML+="<li>New Todo</li>"; //add-don'ts
// todoList.innerHTML+="<li>Make projects</li>"; //add-don'ts

// when u should use it and when u should not?
// don't use it to add new elements, u can use it to edit the content of the existing elements.

// better way to add HTML elements :
// document.createElement()
// remove
// append-adds at the end
// prepend-adds at the start

// (ul->append->adds li after the existing li inside ul tag)
// (ul->prepend->adds li before the existing li inside ul tag)

// const newTodoItem=document.createElement("li");
// newTodoItem.textContent="Make Projects"; 
// const todoList=document.querySelector(".todo-list");
// todoList.append(newTodoItem); //append
// console.log(newTodoItem);

// const newTodoItem=document.createElement("li");
// newTodoItem.textContent="Make Projects"; 
// const todoList=document.querySelector(".todo-list");
// todoList.prepend(newTodoItem); //prepend
// console.log(newTodoItem);

// const todo1=document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

// before
// after
// (ul->after->adds  after existing ul tag)
// (ul->before->adds  before existing ul tag)

// const newTodoItem=document.createElement("li");
// newTodoItem.textContent="Make Projects"; 
// const todoList=document.querySelector(".todo-list");
// todoList.after(newTodoItem); // after
// todoList.before(newTodoItem); // before

// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList=document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend","<li>Make Projects</li>"); //similar to append
// todoList.insertAdjacentHTML("afterbegin","<li>Make Projects</li>"); //similar to prepend
// todoList.insertAdjacentHTML("beforebegin","<li>Make Projects</li>"); //similar to before
// todoList.insertAdjacentHTML("afterend","<li>Make Projects</li>"); //similar to after

// CloneNode()
// // const newelem=elem.CloneNode(true) // syntax
// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// const li2=li.cloneNode(true);
// ul.append(li);
// // ul.prepend(li); //can't append and prepend same node so append it make its clone and prepend the clone
// ul.prepend(li2);

// Some old methods to support poor Internet Explorer
// appendChild()
// insertBefore()
// replaceChild()
// removeChild()

// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// const referenceNode=document.querySelector(".first-todo");
// li.textContent="new todo";
// ul.appendChild(li);
// ul.insertBefore(li,referenceNode); //(oldelem,newelem)

// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// const referenceNode=document.querySelector(".first-todo");
// ul.replaceChild(li,referenceNode); //(newelem,oldelem)
// ul.removeChild(referenceNode);

// static list vs live list
// querySelectorAll hamein static list degi
// getElementsBySomething hamein live list degi // preferable

// const listItems=document.querySelectorAll(".todo-list li");
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// const ul=document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

// const ul=document.querySelector(".todo-list");
// const listItems=ul.getElementsByTagName("li");
// const sixthLi=document.createElement("li");
// sixthLi.textContent="item 6";
// ul.append(sixthLi);
// console.log(listItems);

// how to get the dimension of element
// height width
// const sectionTodo=document.querySelector(".section-todo");
// const info=sectionTodo.getBoundingClientRect();
// const h=sectionTodo.getBoundingClientRect().height;
// const w=sectionTodo.getBoundingClientRect().width;
// const t=sectionTodo.getBoundingClientRect().top;
// console.log(info);

