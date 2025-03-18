console.log("------------------");
console.log("Arrays And Methods ");

// Assignment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let arrNum = 3;

// Method 1
console.log(myFriends.slice(0,arrNum)); // ["Ahmed", "Elham", "Osama"];

// Method 3
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = arrNum
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];





// Assignment 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]



// Assignment 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr =arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



// Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length].join().toUpperCase().slice(website.length,5+ words.length - website.length )); // ZERO



// Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if(haystack.includes(needle)){
    console.log("Found")
}
if(haystack.indexOf(needle)){
    console.log("Found")
}
if(haystack.lastIndexOf(needle)){
    console.log("Found")
}




// Assignment 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// A C D E F X Y
// 0 1 2 3 4 5 6

// Your Code Here
allArrs =arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy