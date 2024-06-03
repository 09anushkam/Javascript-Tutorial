// DOM tree traversing / manipulation

// const rootNode=document.getRootNode(); //documents
// // console.log(rootNode);
// // console.log(rootNode.childNodes);  //html
// const htmlElementNode=rootNode.childNodes[0];
// // console.log(htmlElementNode);
// // console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]
// const headElementNode=htmlElementNode.childNodes[0];
// const textNode1=htmlElementNode.childNodes[1];
// const bodyElementNode=htmlElementNode.childNodes[2];
// // console.log(headElementNode);
// // console.log(textNode1);
// // console.log(bodyElementNode);
// // console.log(headElementNode.parentNode); //html
// // console.log(headElementNode.nextSibling); //text
// // console.log(headElementNode.nextSibling.nextSibling); //body
// // console.log(headElementNode.nextElementSibling); //body
// // console.log(headElementNode.childNodes);

// h1->div->body
// const h1=document.querySelector("h1");
// // console.log(h1.parentNode);
// const div=h1.parentNode;
// div.style.color="#efefef";
// div.style.backgroundColor="#333";
// const body=h1.parentNode.parentNode;
// body.style.color="#efefef";
// body.style.backgroundColor="#333";

// head->title->text
// const head=document.querySelector("head");
// console.log(head);
// const title=head.querySelector("title");
// console.log(title);
// console.log(title.childNodes);

// .children property doesn't gives space 
// const container=document.querySelector(".container");
// console.log(container);
// console.log(container.childNodes); //text,h1,text,p,text
// console.log(container.children); //h1,p



