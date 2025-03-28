// Assignment 4
console.log("Task 2 Assignment 4 ");

let size=document.querySelectorAll("div");

let divOne =document.querySelector(".one");
let divTwo =document.querySelector(".two");

divOne.title=divOne.className;
divTwo.title=divTwo.className;

temp = divOne.innerHTML;
divOne.innerHTML=divTwo.innerHTML;
divTwo.innerHTML=temp+size.length;