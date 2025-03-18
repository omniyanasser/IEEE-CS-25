console.log("------------------");
console.log("Loop - While ");

// Assignment 1


let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index1 = 0;
let counter = 0;


while(index1 < friends1.length){
    if (typeof friends1[index1] === "string") {
        if(friends1[index1][counter] != friends1[counter][counter]){
            console.log(`${friends1[index1]}`);

        }
    }
    index1++;
}

// Output
"1 => Sayed"
"2 => Mahmoud"

