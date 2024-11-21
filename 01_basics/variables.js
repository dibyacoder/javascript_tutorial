const accountId = 144553
let accountEmail = "hitesh@google.com" //The best way to declare an variable
var accountPassword = "12345"
accountCity = "Jaipur" //Not a good way to declare a variable
let accountState;  // If not want to initialize

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])