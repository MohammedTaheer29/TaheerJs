function CalculateCartValue(val1,val2,...num1){ //... is called rest or spread operator
    return num1
}

// console.log(CalculateCartValue(200,400,90,300));

const username = {
    username: "Taheer",
    prices : 280
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(username)
handleObject({
    username:"sam",
    price : 499
})

const myNewArray = [300,400,500,100]

function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue([300,400,500,100]));