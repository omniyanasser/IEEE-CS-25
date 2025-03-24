// Assignment 1
console.log("Task 1 Assignment 1 ");

function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Assignment 2
console.log("Task 1 Assignment 2 ");

function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined) {
    console.log("Second Number Not Found");
    return;
  }
  if (operation == "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation == "multiply") {
    console.log(firstNum * secondNum);
  } else {
    console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// Assignment 3
console.log("Task 1 Assignment 3 ");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Months Example => ${theAge * 12} Months`);
    console.log(`Weeks Example => ${theAge * 52} Weeks`);
    console.log(`Days Example => ${theAge * 365} days`);
    console.log(`hours Example => ${theAge * 8760} hours`);
    console.log(`minutes Example => ${theAge * 365 * 24 * 60} minutes`);
    console.log(`seconds Example => ${theAge * 365 * 24 * 3600} seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment 4
console.log("Task 1 Assignment 4 ");

function checkStatus(a, b, c) {
  function getName() {
    return typeof a == "string" ? a : typeof b == "string" ? b : c;
  }

  function getAge() {
    return typeof a === "number" ? a : typeof b == "number" ? b : c;
  }

  function getStatus() {
    return a === true || b === true || c === true
      ? "You Are Available For Hire"
      : "You Are Not Available For Hire";
  }
  console.log(`Hello ${getName()}, Your Age Is ${getAge()}, ${getStatus()}`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Assignment 5
console.log("Task 1 Assignment 5 ");

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);

  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

// Assignment 6
console.log("Task 1 Assignment 6 ");

function multiply(...num) {
  let mul = 1;
  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] == "string") {
      continue;
    }

    mul *= Math.floor(num[i]);
  }
  console.log(mul);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
