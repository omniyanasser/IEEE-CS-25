// Assignment 1

// Test Case 1
//let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
//let num = 110; // "110"

let num=9;

if(num < 10){
    console.log(`${"00"}${num}`)
}
else if(num > 10 && num<100){
    console.log(`0${num}`)
}
else if(num >= 100){
    console.log(`${num}`)
}


// Assignment 2

let numm1 = 9;
let str = "9";
let str2 = "20";

// Output

"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if(numm1==str){
    console.log(`${numm1} Is The Same Value As ${str}`)
}
 if(numm1 == str){
    if(typeof numm1 !== typeof str)
    console.log(`${numm1} Is The Same Value As ${str} But Not The Same Type`)
}
 if(numm1 != str2 || typeof numm1 !== typeof str){
    console.log(`${numm1} Is Not The Same Value Or The Same Type As ${str2}`)
}
 if(str != str2 || typeof str === typeof str2){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}



// Assignment 3

let number1 = 10;
let number2 = 30;
let number3 = "30";

if((number3 > number1 && number3 !== number2)
  && (number3 > number1 && number3 !== number2)
  && (number3 !== number1 && number3 !== number2)
){
    console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number
30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
${number3} Value And Type Is Not The Same As ${number1} And Type Is Not The Same As ${number2}`)
}



// Assignment 4

// Edit What You Want Here

let num1 = 2;
let num2 = 1;
let num3 = 2;
let num4 = 24;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}