function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(username);
    // In this case the SetUsername function will be called but while returning back from that function context to the this createUser function , it will be dumped
    //So the above line will lead to print the line no 17 as--{ email: 'chai@fb.com', password: '123' }
    SetUsername.call(this, username) // This will print --{ username: 'chai', email: 'chai@fb.com', password: '123' }
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/*
Earlier we were using bind in reactjs version 1, as library was not so defined
When there is global context, then this reference to window object while node refere to emoty object
call: it is a method to call another method, it pass the current execution context to another function.
call method used to call the reference, here this gives the current context.
*/