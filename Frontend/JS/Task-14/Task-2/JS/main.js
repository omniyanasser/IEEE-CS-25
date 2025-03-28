//problem 1
function leapYear(year) {
  if (year % 4 == 0 || year % 100 == 0) {
    return `true`;
  } else {
    return `false`;
  }
}

//problem 2

function getAbsSum(arr) {
  return arr.reduce((sum, num) => {
    let value = Math.abs(num);
    sum += value;
    return sum;
  }, 0);
}

//problem 3

function possibleBonus(a, b) {
  if (a >= b || a + 6 < b) {
    return false;
  } else {
    return true;
  }
}

//problem 4

function isOmnipresent(arr, val) {
  let isfound = true;
  arr.forEach((subArr) => {
    if (!subArr.includes(val)) {
      isfound = false; //
    }
  });

  return isfound;
}

//problem 5

function squareDigits(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((e) => e ** 2)
      .join("")
  );
}

//problem 6

function consecutiveSum(n) {
  for (let i = 1; i < n; i++) {
    let sum = 0;

    for (let j = i; sum < n; j++) {
      sum += j;

      if (sum == n) {
        return true;
      }
    }
  }
  return false;
}
