const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },3)

const myTotal = myNum.reduce((acc,currval)=> acc + currval, 0)

console.log(myTotal);


const shoppingcart = [
    {
        itemname: "Js course",
        price : 449
    },
    {
        itemname: "C course",
        price : 399
    },
    {
        itemname: "DS course",
        price : 669
    },
    {
        itemname: "py course",
        price : 559
    }
]

const pricetopay = shoppingcart.reduce((acc ,item)=>acc + item.price, 0)

console.log(pricetopay);