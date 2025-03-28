// Assignment 2
console.log("Task 2 Assignment 2 ");

let size = document.querySelectorAll("div img");
console.log(size);
console.log(size.length);

for(let i=0; i< size.length; i++){
    size[i].src="../img/work.png";
    size[i].alt="elzero logo"
}

