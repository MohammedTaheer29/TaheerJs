// function sayMyName(){
//     console.log("T");
//     console.log("A");
//     console.log("H");
//     console.log("I");
//     console.log("R");
// }

// // sayMyName()

// // function addTwoNumbers(number1,number2){
// //       console.log(number1+number2); 
// // }
// function addTwoNumbers(number1,number2){
//     //  let results = number1+number2
//     //  return results
//     return number1 + number2
// }

// const results = addTwoNumbers(2,3)

// console.log("Results", results);

function loginUserMessage(username = "salman"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Taheer")
console.log(loginUserMessage("Tiger"))