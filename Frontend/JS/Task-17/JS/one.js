//  Assignment 1
// Needed Output
//Set(3) {10, 20, 2}
//2
console.log("Assignment 1")

let setOfNumbers=new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size-1]);
console.log(Array.from(setOfNumbers)[2]);



//  Assignment 2
console.log("Assignment 2")
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(new Set(myFriends.sort()));



//  Assignment 3
console.log("Assignment 3")

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  // Needed Output
  //Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
 // 3
 // true

 let mapInfo=new Map(Object.entries(myInfo));
 console.log(mapInfo);
 console.log(mapInfo.size);
 console.log(mapInfo.has("role"));



 //  Assignment 4
console.log("Assignment 4")

let theNumber = 100020003000;

// Needed Output
123
console.log(+([...new Set([theNumber].toString())].filter(e => e>0).join("")))




//  Assignment 5
console.log("Assignment 5")

let theName = "Elzero";

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

console.log([...new Set(theName)])
console.log([...theName])
console.log(Array.from(theName))
console.log(theName.split(""))
console.log(Object.assign([],theName));
console.log(Object.values(theName));



//  Assignment 6
console.log("Assignment 6")

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let count= chars.filter(e=> typeof e === "number").length;
chars= chars.filter(e=>typeof e=== "number").concat(chars.filter(e=>typeof e !== "number"))

chars.copyWithin(0,count,count*2);
console.log(chars)



//  Assignment 7
console.log("Assignment 7")

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6]

console.log([...numsOne,...numsTwo]);
console.log(numsOne.concat(numsTwo));

//numsOne.push(...numsTwo);
//console.log(numsOne)

numsTwo.unshift(...numsOne);
console.log(numsTwo)




//  Assignment 8
console.log("Assignment 8")

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
210

console.log(+[...n2.keys()].reverse().join(""));

