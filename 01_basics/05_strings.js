const name = "nadeem"
const repoCount = 50

// console.log( name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nadeem-ch-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);  // == 8
// console.log(gameName.toUpperCase()); // == NADEEMCH
console.log(gameName.charAt(2));   // == d
console.log (gameName.indexOf('d'))  // == 2

const newString = gameName.substring(0, 4)  // == nade
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //isme minus value bhi de sakte hai 
console.log(anotherString); // ==  ade

const newStringOne = "     nadeem    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nadeem.com/nadeem%20choudhary"

console.log(url.replace('%20', '-'))  // == https://nadeem.com/nadeem-choudhary

console.log(url.includes('nadeem'))  // == true
console.log(url.includes('naheem'))  // == false

console.log(gameName.split('-'));  //  == [ 'nadeem', 'ch', 'com' ]