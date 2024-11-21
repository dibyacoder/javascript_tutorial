// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDt = new Date(2023, 0, 23)
// let myCreatedDt = new Date(2023, 0, 23, 5, 3)
// let myCreatedDt = new Date("2023-01-14")
// let myCreatedDt = new Date("01-14-2023")
console.log(myCreatedDt.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
//console.log(myCreatedDt.getTime());
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})