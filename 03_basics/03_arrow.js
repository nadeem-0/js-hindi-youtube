const user = {
    username: "nadeem",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "nadeem"
//     console.log(this.username);    
// }

// chai()

// const chai = function () {
//     let username = "nadeem"
//     console.log(this.username);    
// }  //isko run kia tha toh undefined aaya tha

const chai =  () => {
    let username = "nadeem"
    console.log(this);    
}


// chai() 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));  // == 7

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username:"nadeem"})


console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()