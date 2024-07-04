// DOM
// document object model
// Note the code given below is just for reference if u want to run it go to original file "DOM_p2_3.js"


// Select element using getElementById()
// Select element using querySelector()

// Change Text
// textContent - all text even hidden ones and innerText
// mainHeading.textContent="Changed Text";

// Change the Styles of elements
// mainHeading.style.border="5px solid brown";
// mainHeading.style.color="yellow";

// elem.getAttribute() and elem.setAttribute()

// array like object ---> indexing, length property
// we can't use forEach method to iterate through HTMLCollection
// we can use simple for loop , for of loop
// 1.) get multiple elements items using getElementsByClassName()
// navItems = Array.from(navItems); // it is necessary to convert NodeList->Array to apply forEach because i used getElementsByTagName() / getElementsBySomething()
// 2.) get multiple elements items using querySelectorAll()
// navItems = Array.from(navItems); // not necessary to convert NodeList->Array to apply forEach because i used querySelectorAll()

// innerHTML
// headline.innerHTML="<h1>Inner HTML changed</h1>";
// headline.innerHTML+="<button class=\"btn\">Learn More</button>";

// classList
// elem.classList.add() , .remove() , .contains()
// toggle - removes an element if it is already present/adds an element if it is absent
// .toggle()

// Add new HTML elements to page
// // todoList.innerHTML="<li>New Todo</li>"; //replace-dos
// todoList.innerHTML+="<li>New Todo</li>"; //add-don'ts
// todoList.innerHTML+="<li>Make projects</li>"; //add-don'ts
// when u should use it and when u should not?
// don't use it to add new elements, u can use it to edit the content of the existing elements.

// better way to add HTML elements :
// document.createElement()
// remove()
// append()-adds at the end , (ul->append->adds li after the existing li inside ul tag)
// prepend()-adds at the start , (ul->prepend->adds li before the existing li inside ul tag)
// before (ul->before->adds  before existing ul tag)
// after (ul->after->adds  after existing ul tag)

// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin
// beforeend
// afterend
// todoList.insertAdjacentHTML("beforeend","<li>Make Projects</li>"); //similar to append
// todoList.insertAdjacentHTML("afterbegin","<li>Make Projects</li>"); //similar to prepend
// todoList.insertAdjacentHTML("beforebegin","<li>Make Projects</li>"); //similar to before
// todoList.insertAdjacentHTML("afterend","<li>Make Projects</li>"); //similar to after

// CloneNode()
// const newelem=elem.CloneNode(true) // syntax

// Some old methods to support poor Internet Explorer (MOST COMMONLY USED)
// appendChild()
// insertBefore()
// replaceChild()
// removeChild()

// ul.insertBefore(li,referenceNode); //(oldelem,newelem)
// ul.replaceChild(li,referenceNode); //(newelem,oldelem)

// static list vs live list
// querySelectorAll hamein static list degi
// getElementsBySomething hamein live list degi // preferable

// how to get the dimension of element
// height width
// const sectionTodo=document.querySelector(".section-todo");
// const info=sectionTodo.getBoundingClientRect();
// const h=sectionTodo.getBoundingClientRect().height;
// const w=sectionTodo.getBoundingClientRect().width;
// const t=sectionTodo.getBoundingClientRect().top;

// Refer "DOM_p2_4.js" for DOM Tree traversing / manipulation