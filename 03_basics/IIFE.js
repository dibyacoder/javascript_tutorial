// Immediately Invoked Function Expressions (IIFE)
// Uses -- Sometimes we face problems due to globa scope pollution, to remove this kind of pollution we use IIFE

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //Semi colon is needed when we are going to write 2 iife functions

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


// ()() first parenthesis indicates the function defination and 2nd Paranthesis indicates the function execution
// const addTwo = (num1, num2) => ( num1 + num2 ) ----example