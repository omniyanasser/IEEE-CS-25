//  Assignment 1
console.log("Assignment 1")

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\d+|\D+)+/ig;
console.log(ip.match(ipRe));


//  Assignment 2
console.log("Assignment 2")

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let specialNamesRe = /\bOs\d*o\b/ig;
console.log(specialNames.match(specialNamesRe));



//  Assignment 3
console.log("Assignment 3")
let phone = "+(995)-123 (4567)";

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phoneRe));



//  Assignment 4
console.log("Assignment 4")


let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*

https? => http or https (?) option
\/\/ => \\
(?:[-\w]+\.)? => www. or any letters or numbers\w followed by a dot. option ?
([-\w]+) => any letters or numbers \w
\. => dot.
\w+ => letters or numbers 
(?:\.\w+)? => dot. follwed by any letters or numbers\w option ?
\/?=> / option ? zero or more* of any character.
.* =>
i=> case-insensitive

*/



//  Assignment 5
console.log("Assignment 5")

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRe = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,4}/ig;

console.log(date1.match(dateRe)); // "25/10/1982"
console.log(date2.match(dateRe)); // "25 - 10 - 1982"
console.log(date3.match(dateRe)); // "25 10 1982"
console.log(date4.match(dateRe)); // "25 10 82"



//  Assignment 6
console.log("Assignment 6")

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlRe = /(https?:\/\/)?(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));