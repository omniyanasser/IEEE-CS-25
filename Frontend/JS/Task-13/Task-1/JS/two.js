// Assignment 1
console.log("Task 2 Assignment 1 ");

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))} ${zName
      .slice(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2)
      .toUpperCase()}.`;

    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }

  function ageWithMessage() {
    return `Your Age Is ${parseInt(zAge)}`;

    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }

  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }

  function fullDetails() {
    return `Hello ${namePattern()},${ageWithMessage()},${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Assignment 2
console.log("Task 2 Assignment 2 ");

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Assignment 3
console.log("Task 2 Assignment 3 ");

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// Assignment 4
console.log("Task 2 Assignment 4 ");

function specialMix(...data) {
  let sum=0;
  let isnum = false;
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(parseInt(data[i]))) {
      sum += parseInt(data[i]);
      isnum = true;
    }
  }
  if (isnum == true) {
    return sum;
  }
  else{
    return `All Is Strings`;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

