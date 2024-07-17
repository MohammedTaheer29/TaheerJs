// foreach

const coding = ["C","Js","Py","Ruby"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((value) => {  //arrow method
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "Js"
    },
    {
        languageName : "Java",
        languageFileName: "Java"
    },
    {
        languageName : "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})