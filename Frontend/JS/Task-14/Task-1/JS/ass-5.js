// Assignment 5
console.log("Task 2 Assignment 5 ");

let img = document.querySelectorAll("img");

for(let i=0; i< img.length; i++){
    if(img[i].hasAttribute("alt")){
        img[i].setAttribute("alt","Old");
    }
    else{
        img[i].setAttribute("alt","elzero new")
    }
}
