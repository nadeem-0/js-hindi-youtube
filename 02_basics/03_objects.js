// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Nadeem",
    "full name": "Nadeem Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "nadeem@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "nadeem@google.com"
// Object.freeze(JsUser)
JsUser.email = "nadeem@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());