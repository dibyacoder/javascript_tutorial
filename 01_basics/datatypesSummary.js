//  Primitive //Memory space --stack
//Can be called by value
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) Memory space--Heap
// Can be called Reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/


//------------------------------------------------------------------------------------------------
//Premitive dataType (Uses stack) creates copy and changes are done on copies
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
 console.log(anothername);
 //Both will print different

//Non-premitive datatype (Uses Heap)
let userOne =
    {   
        email: "user@google.com",
        upi: "user@ybl"
    }
let userTwo = userOne


userTwo.email="dibyaranja1029@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
//Both will print the same 