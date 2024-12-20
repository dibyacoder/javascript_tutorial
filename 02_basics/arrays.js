// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //To push at the front of the array
// myArr.shift()  //To remove at the front of the array

// console.log(myArr.includes(9)); // returns boolean
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //Convert the array to a string

console.log(typeof myArr); //object
console.log( newArr);


// slice, splice

console.log("A ", myArr); //[0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1,2]
console.log("B ", myArr); //[0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3) //Splice operation acts on the original array and remove the range from it.
console.log("C ", myArr); //[0, 4, 5]
console.log(myn2); //[1,2,3]