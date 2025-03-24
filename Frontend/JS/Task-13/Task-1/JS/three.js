// Assignment 1
console.log("Task 3 Assignment 1 ");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ch=mix.map(function(el){
    return isNaN(parseInt(el))?el:"";
}).reduce(function(acc,cu){
    return`${acc}${cu}`;
})
console.log(ch);

// Elzero


// Assignment 2
console.log("Task 3 Assignment 2 ");
let myString = "EElllzzzzzzzeroo";

let norepeat = myString.split("").filter(function(el,i){
    return myString.indexOf(el) == i;
}).reduce(function(acc,cu){
    return`${acc}${cu}`;
});
console.log(norepeat);

// Elzero



// Assignment 3
console.log("Task 3 Assignment 3 ");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arr3=myArray.reduce(function(acc,cu){
    return acc+ cu;
}).replace(",","");
console.log(arr3);

// Elzero



// Assignment 4
console.log("Task 3 Assignment 4 ");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newNum=numsAndStrings.filter(function(el){
    return !isNaN(parseInt(el))
}).map(function(e){
    return -e;
})
console.log(newNum);

// [-1, -10, 10, 20, -5, -3]



// Assignment 5
console.log("Task 3 Assignment 5 ");

let nums = [2, 12, 11, 5, 10, 1, 99];

let num5= nums.reduce(function(acc,cu){
  if(cu %2 !=0){
    return acc+cu;
  }
  else{
    return acc*cu;
  }
},1)

console.log(num5);

// 500
