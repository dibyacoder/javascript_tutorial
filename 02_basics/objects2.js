// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // Not preferrable, will create an object inside an object.
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Use to merge the objects

const obj3 = {10:"z",...obj1, ...obj2} // Merge the objects using spread operator
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email);
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] returns an array
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//Destructure , so that we need not to console.log everytime with course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

