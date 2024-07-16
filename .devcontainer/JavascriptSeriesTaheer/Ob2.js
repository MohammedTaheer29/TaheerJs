// const tinderUser = new Object() //singleton object

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Tiger"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sede@gmail.com",
    fullname: {
        userfullname:{
            firstname :"Mohd",
            lastname : "Taheer"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const Obj1 = {1:"a",2:"b"}
const Obj2 = {3:"c",4:"d"}
const Obj4 = {5:"e",6:"f"}

// const Obj3 = {Obj1,Obj2}
// const Obj3 = Object.assign({}, Obj1,Obj2,Obj4)
const Obj3 = {...Obj1,...Obj2,...Obj4}
// console.log(Obj3);

const users = [
    {
        id:1,
        email:"t1@gmail.com"
    },
    {
    },
    {
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));