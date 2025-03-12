// Assignment 1
console.log("Assignment 1");
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10**5); // 100000
console.log(Math.trunc(100000.6)); // 100000
console.log(100000.00); // 100000
console.log(Math.round(100000.3)); // 100000
console.log(1e2**2+9e4); // 100000
console.log(1e3**2-9e5); // 100000
console.log(3e2**2+1e4); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(parseInt(100000)); // 100000


// Assignment 2
console.log("Assignment 2");
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991



// Assignment 3
console.log("Assignment 3");
console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16  stackoverflow



// Assignment 4
console.log("Assignment 4");
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2));// 100.57


// Assignment 5
console.log("Assignment 5");
let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2



// Assignment 6
console.log("Assignment 6");
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(parseFloat(flt).toFixed())); // 10



// Assignment 7
console.log("Assignment 7");
console.log(Math.floor(Math.random() *5)); // 0 || 1 || 2 || 3 || 4
