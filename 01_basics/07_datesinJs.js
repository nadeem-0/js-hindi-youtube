//  Dates

let myDate = new Date()
console.log(myDate.toString());  // Wed Dec 18 2024 06:31:34 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  // Wed Dec 18 2024
console.log(myDate.toLocaleString())  // 12/18/2024, 6:34:42 AM
console.log(myDate.toISOString())  // 2024-12-18T06:35:38.096Z
console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)  // Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")  //  2023/01/14, 12:00:00 AM
// let myCreatedDate = new Date("01-14-2023") // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);  // 2024-12-18T07:10:36.147Z
console.log(newDate.getMonth() + 1);  // 12
console.log(newDate.getDay());  // 3

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",

})