// array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array (1, 2, 3, 4)
console.log(myArr[1]);  // 1

// Array methods

myArr.push(6)
myArr.push(7)  
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));  // value array k andar hai ya nhi yeh batata hai bs
console.log(myArr.indexOf(3));  // jo value hai array k andar hai or kitne number pr hai agr nahi hai toh -1 show krta hai

const newArr = myArr.join()  // isse hoga yeh ki jo value hai vo array li value aaygi but alag se bhi ek value aagi 

console.log(myArr);
console.log(typeof newArr);  // jo alag se value aari hai uska typeof pata lagta hai

//  slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn1)
console.log(myn2);