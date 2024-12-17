// Primitive 

//  7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nadeem",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);    //undefined
// console.log(typeof outsideTemp);  //Object
// console.log(typeof scoreValue);   //Number
// console.log(typeof myFunction);   //function
// console.log(typeof anotherId);    //symbol

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);  //hiteshchoudharydotcom
console.log(anothername);    // chaiaurcode

let userOne = {
    email: "user@google.com"
   
}

let userTwo = userOne

userTwo.email = "nadeem@google.com"

console.log(userOne.email);    //nadeem@google.com
console.log(userTwo.email);    //nadeem@google.com 