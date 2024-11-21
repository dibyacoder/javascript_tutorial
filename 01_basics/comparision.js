// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);//true
// console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);// true

// In javascript == works differently than < > <= <=
// In line 13, null is converted into 0 and thenn when its compared to 0, its output is TRUE.

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// === 
//strict check, it checks not only value but also checks the datatype.
console.log("2" === 2);