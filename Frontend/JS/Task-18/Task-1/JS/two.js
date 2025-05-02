// Assignment 1
console.log("Assignment 1");

let dataNow1= new Date();
let birthday =new Date("Dec 13, 2003");
let diff= dataNow1-birthday;

let seconds= Math.floor(diff/1000);
console.log(`${seconds} seconds`)

let minutes= Math.floor(seconds/60);
console.log(`${minutes} minutes`)

let hours= Math.floor(minutes/60);
console.log(`${hours} hours`)

let days= Math.floor(hours/24);
console.log(`${days} days`)

let months= Math.floor(days/30);
console.log(`${months} months`)

let years= Math.floor(days/365);
console.log(`${years} years`)



// Assignment 2
console.log("Assignment 2");

let dataNow2= new Date();
dataNow2.setTime(0);
dataNow2.setFullYear(1980,0,1);
dataNow2.setHours(0,0,1)
console.log(`${dataNow2}`)



// Assignment 3
console.log("Assignment 3");

let dataNow3= new Date();
dataNow3.setDate(0)
console.log(`${dataNow3}`)

let months3 = ["January","February", "March", "April", "May", "June","July","August","September","October", "November","December"];

console.log(`Previous Month Is ${months3[dataNow3.getMonth()]} And Last Day Is ${dataNow3.getDate()}`)

// Needed Output

"wed Apr 30 2025 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"



// Assignment 4
console.log("Assignment 4");

let dataOne= new Date("Dec 13, 2003")
let dataTwo= new Date("2003,12,13")
let dataThree= new Date("12/13/2003")
let dataFour= new Date("12-13-2003")

console.log(`${dataOne}`)
console.log(`${dataTwo}`)
console.log(`${dataThree}`)
console.log(`${dataFour}`)



// Assignment 5
console.log("Assignment 5");

let s= performance.now()

// for(let i=0; i<=99999;i++){
//     console.log(i);
// }

let e=performance.now();

let duration= Math.floor(e-s);
console.log(`Loop Took ${duration} Milliseconds.`)



// Assignment 6
console.log("Assignment 6");

// Write Your Generator Function Here
function* gen(){
    let value=14;
    let step=140;

    while(true){
        yield value;
        value+=step;
        step+=200;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}




// Assignment 7
console.log("Assignment 7");


function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here

  function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());

  }
  
  let generator7 = genAll();
  
  console.log(generator7.next()); // {value: 1, done: false}
  console.log(generator7.next()); // {value: 2, done: false}
  console.log(generator7.next()); // {value: 3, done: false}
  console.log(generator7.next()); // {value: 4, done: false}
  console.log(generator7.next()); // {value: 5, done: false}
  console.log(generator7.next()); // {value: "A", done: false}
  console.log(generator7.next()); // {value: "B", done: false}
  console.log(generator7.next()); // {value: "C", done: false}
  console.log(generator7.next()); // {value: "D", done: false}



  