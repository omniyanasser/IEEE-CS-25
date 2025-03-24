// Assignment 1
console.log("Assignment 1");

function triArea(base, height) {
	return((base * height)/2 )  ;
}



// Assignment 2
console.log("Assignment 2");

function addUp(n1) {
    return(n1*(n1+1)/2)  ;
}
console.log(addUp(4));



// Assignment 3
console.log("Assignment 3");

function matchHouses(step) {
    if(step==0){
        return(0)
    }
	else if(step===1){
        return(step*6);
    }
    else{
        return((step*6)-step+1);
    }
}

// Assignment 4
console.log("Assignment 4");

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1,2,3,4,5]));


// Assignment 5
console.log("Assignment 5");

function sevenBoom(arr) {
	if(arr.join("").includes("7")) {
        return ("Boom!")
    }
    else{
        return("there is no 7 in the array")
    }
}

console.log(sevenBoom([1,2,3,4,5,97]));