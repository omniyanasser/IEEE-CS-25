// Assignment 3
console.log("Task 2 Assignment 3 ");


let myDiv = document.querySelector(".result");
function change(event) {
  event.preventDefault();

  let myInput = document.querySelector("input").value;

 
  if (!isNaN(myInput)&& myInput >0){
    myDiv.innerHTML = `{${myInput}} USD Dollar = {${(myInput * 15.6).toFixed(2)}}Egyptian Pound`;
  }
  else{
    myDiv.innerHTML ="not valid";
  }
  
}

myDiv.setAttribute("class", "change-format");

