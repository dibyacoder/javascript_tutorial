const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);  // This will print {} because there is no current context, but if we run the same syntax in browser it wont be empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //It will print "Undefined" because it is inside a function not an object
// }

// chai()
//Normal function
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
//Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>())