// Dates

// let MyDate = new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleDateString());
// console.log(typeof MyDate);


// // let MyCreateDate = new Date(2024,0 ,23)
// let MyCreateDate = new Date(2024,0 ,23, 5 , 6)
// let MyCreateDate = new Date("2024-08-14")
let MyCreateDate = new Date("08-29-2002")
// console.log(MyCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(MyCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);