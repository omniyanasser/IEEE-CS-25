// ======== Exercise 3.1 ========
// Instructions:
// • Add explicit parameter types and return type
// • Fix any errors resulting from invalid types
function add(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
var someSum = sumArray([3, 6, 9]);
console.log('[Exercise 3.1]', "3 + 6 + 9 === ".concat(someSum));
// ======== Exercise 3.2 ========
// Instructions:
// • Add explicit parameter types and return types to the `deposit` function
// • Make the function's `message` parameter *optional*
var bankAccount = {
    money: 0,
    deposit: function (value, message) {
        this.money += value;
        if (message) {
            console.log(message);
        }
    }
};
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');
console.log('[Exercise 3.2]', "Account value: $".concat(bankAccount.money));
// ======== Exercise 3.3 ========
// For a given word, we compute its Scrabble® score.
// Instructions:
// • Add type annotations wherever possible
function computeScore(word) {
    var letters = word.toUpperCase().split('');
    return letters.reduce(function (accum, curr) { return accum += getPointsFor(curr); }, 0);
}
function getPointsFor(letter) {
    var lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce(function (computedScore, pointsTuple) {
        var letters = pointsTuple[0], score = pointsTuple[1];
        if (letters.split('').find(function (ll) { return ll === letter; })) {
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}
console.log('[Exercise 3.3]', "zoo is worth ".concat(computeScore('zoo'), " points."));
// ======== Exercise 3.4 ========
// Instructions:
// • Add explicit parameter types and return types
// • Add a default greeting: "hello"
function greet(greeting) {
    if (greeting === void 0) { greeting = "defaultGreeting val"; }
    return greeting.toUpperCase();
}
var defaultGreeting = greet();
var portugueseGreeting = greet('Oi como vai!');
console.log('[Exercise 3.4]', defaultGreeting, portugueseGreeting);
// ======== Exercise 3.5 ========
// Instructions:
// • Add parameter type annotation
// • Even though this function doesn't return, add an explicit return type
function layEggs(quantity, color) {
    console.log("[Exercise 3.5] You just laid ".concat(quantity, " ").concat(color, " eggs. Good job!"));
}
layEggs(1, "red");
// ======== Exercise 3.6 ========
// Here we've initialized two variables with function types.
// Later we assign them to functions.
// Instructions:
// • Fix the errors
var multiply;
var capitalize;
//   multiply = function(value: string): string {
//     return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
//   }
//   capitalize = function(x: number, y: number): number {
//     return x * y;
//   }
capitalize = function (value) {
    return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
multiply = function (x, y) {
    return x * y;
};
console.log('[Exercise 3.6]', capitalize("nifty ".concat(multiply(5, 10))));
// ======== Exercise 3.7 ========
// Currently, our function `pushToCollection` accepts *any* item and adds it,
// (indiscriminantly) to *any* kind of array.
//
// A couple problems with this:
//
//     1. The `any` type causes us to lose ALL typing information on our params.
//     2. This looseness has come back to back to bite us during runtime. (Just
//        look at `incrementByTwo`!)
//
// Instructions:
// • Implement `pushToCollection` as a generic function. (This should create
//   compile-time errors in places where incorrect values are being added to
//   a given collection. Fix these values to the correct types.)
// • Once made generic, `pushToCollection` should be *generic* enough to operate
//   on items and collections of any type while continuing to enforce that they match.
var numberCollection = [];
var stringCollection = [];
function pushToCollection(item, collection) {
    collection.push(item);
    return collection;
}
// Add some stuff to the collections
//pushToCollection(false, stringCollection);
pushToCollection('hi', stringCollection);
//pushToCollection([], stringCollection);
pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);
var incrementedByTwo = numberCollection.map(function (num) { return num + 2; });
console.log('[Exercise 3.7]', "[".concat(incrementedByTwo, "] should deeply equal [3,4,5]"));
