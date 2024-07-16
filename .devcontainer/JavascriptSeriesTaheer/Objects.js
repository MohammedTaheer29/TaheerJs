// singleton

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Taheer",
    age:22,
    [mySym]: "mykey",
    email:"tahir@gmail.com",
    location:"Bangalore",
    isLoggedIn:false,
    lastLoginDays:["Sunday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["name"])
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// console.log(typeof JsUser);

JsUser.email = "tiger@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "salman@khan.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());