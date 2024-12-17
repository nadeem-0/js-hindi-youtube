const score = 400
// console.log(score)  // == 400

const balance = new Number(100)
// console.log(balance) // == [Number: 100]

// console.log(balance.toString());  // == number 100 hi hai type of check karege toh vo string ban gaya hai
// console.log(balance.toString().length); //string banne k bad iski lenght bhi dekh sakhte hai hum jo iski length ban kr aai hai vo 3 aai hai
// console.log(balance.toFixed(2));  // == 100.00

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));  // == yeh 3 digit mei hi value dega next dekhte hai aab

const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3));  // == 124 yeh 3 digit mei hi value dega bs next dekhte hai

const otherNumber3 = 1123.8966
// console.log(otherNumber3.toPrecision(3)); // == 1.12e+3 ek value di baki Exponential mei di

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // khabi khabi zero ginne mei dikkat aati hai toh yeh krke comma aajata hai 1,000,000 eshe aate hai US system k hisab se aab humhe indian number system chiye 

// console.log(hundreds.toLocaleString('en-IN')); // == aab dekho indian system k hisab se aaye 10,00,000 eshe



//********************************    MATHS   ******************************* */


console.log(Math);
console.log(Math.abs(-4));  // isme value ko positive kr deta hai jashe -4 tha isko 4  kr diya
console.log(Math.round(4.6)) //  isme value ko round off figure mei kr deta hai jashe 4.6 tha isko round off krke 5 kr diya
console.log(Math.ceil(4.2))  // isme value ko top ki leta hai jashe ki agr value 4 ha isse zara shi bhi plus hui 5 kr dega
console.log(Math.floor(4.8))  //  isme value ko niche rakhega jashe value points mei hui toh next value nhi karega 4 hi rakhega 