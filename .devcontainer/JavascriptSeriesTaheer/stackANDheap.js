// Stack and Heap concepts

// Stack are Primitive & Heap are Non primitive

let myName = "Taheer"

let anotherName = myName
anotherName = "Tiger"

console.log(myName);
console.log(anotherName);


let user = {
    email : "u1@gmail.com",
    upi : "upiU1"
}

let userOne = user

userOne.email = "user@gmail.com" //refer to user and change as per change in userOne
console.log(user);
console.log(userOne);