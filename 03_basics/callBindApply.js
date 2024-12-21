var obj = {name : "Piyush"};
function sayHello(){
  return "Hello " + this.name;
}

console.log(sayHello()); // Hello

/*
Call, bind and Apply are three super important JavaScript methods that are
available to all JavaScript functions, which are used to set the
this keyword independent of how the function is called. You can use
these methods to tie a function into an object and call the function as if it belonged to that object.
*/


//Call
function sayHello(age,profession){
    return "Hello " + this.name + age + profession;
  }
  
var obj = {name: "Piyush"};
  
console.log(sayHello.call(obj,24,"Engineer")); //Hello Piyush 24 Engineer

//Apply
function sayHello(age,profession){
    return "Hello " + this.name + age + profession;
  }
  
var obj = {name: "Piyush"};
  
console.log(sayHello.apply(obj,[24,"Engineer"])); //Hello Piyush 24 Engineer

// Bind

function sayHello(age,profession){
    return "Hello " + this.name + age + profession;
  }
  
var obj = {name: "Piyush"};
  
const bindFunc= sayHello.bind(obj); 

console.log(bindFunc(24,"Engineer"));

console.log(bindFunc(25,"Architect"));




//--------------------------------------------------------------------
const age = 10;
var person = {
    name: "Piyush",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
person.getAge.call(person2); // show with apply and bind as well
//Answer will be 24
