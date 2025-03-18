console.log("------------------");
console.log("loop");

// Assignment 1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i == exclude) continue;
  console.log(`${i}
    `);
}

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

// Assignment 2
console.log("Assignment 2 loop");

let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= end2; i--) {
  if (i < 10) {
    console.log(`${0}${i}
            `);
  } else
    console.log(`${i}
    `);

  if (i == stop) break;
}

// Assignment 3
console.log("Assignment 3 loop");

let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for (let i = start3; i <= end3; i++) {
  console.log(`${i}
        `);
  for (j = breaker3; j < end3; j += breaker3) {
    console.log(`-- ${j}
        `);
  }
}

// Assignment 4
console.log("Assignment 4 loop");

let index = 10;
let jump = 2;

let i = index;
for (;;) {
  if (i < jump * jump) break;
  console.log(`${i}
        `);
  i -= jump;
}

// Assignment 5
console.log("Assignment 5 loop");

let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

letter = letter.toUpperCase();
for (let i = friends5.length - friends5.length; i < friends5.length; i++) {
  if (friends5[i].startsWith(letter)) continue;
  console.log(`${i} => ${friends5[i]}`);
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

// Assignment 6
console.log("Assignment 6 loop");
let start6 = 0;
let swappedName = "elZerO";
let output = "";

for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] == swappedName[i].toLowerCase())
    output += swappedName[i].toUpperCase();
  else {
    output += swappedName[i].toLowerCase();
  }
}
console.log(output);

// Output
("ELzERo");

// Assignment 7
console.log("Assignment 7 loop");

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start7; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    if (i == mix.length - mix.length) continue;

    console.log(`${mix[i]} `);
  }
}

// Output
2;
3;
4;
