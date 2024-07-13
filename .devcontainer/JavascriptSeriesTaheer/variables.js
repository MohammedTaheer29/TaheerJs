const acctId = 12345
let accemail = "taheer@gmail.com"
var accpwd = "89090"
acctcity = "Bangalore"

let accstate;
accemail = "tiger@gmail.com"
accpwd = "00711"
acctcity = "Chennai"
// acctId = 123 // not allowed

/*
prefer not to use var bcauz of issue in block scope
and functional scope
*/

console.log(acctId);

console.table([accemail,accpwd,acctId,accstate])