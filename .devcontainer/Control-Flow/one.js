// if
// conditional operators are <,>,>=,<=,==,!=,===


// const isUserLoggedIn = true
// const temperature = 32

// if (temperature === 40){   // if condition true execute if false not execute
//      console.log("less than 40");
     
//     }else{
//      console.log("temperature is greater than 40");
//     }
//     // console.log("exceuted");

    // const score = 300

    // if(score>200){
    //     const power = "fly"
    //     console.log(`user power: ${power}`);
    // }

    // console.log(`user power : ${power}`);

    // const balance = 1000

    // if(balance > 500) console.log("test"), console.log("test2"); not recommended apprach to code this way

    // if(balance < 500){
    //     console.log("less than");
    // }
    // else if (balance < 750){
    //     console.log("less than 750");
    // }else if(balance < 900){
    //     console.log("less than 900");
    // }
    // else{
    //     console.log("less than 1200");
    // }

    const UserLoggedIn = true
    const debitcard = true
    const loggedInFromGoogle = false
    const loggedInFromEmail = true

    if(UserLoggedIn && debitcard && 2==3){
        console.log("Allow to buy course");
    }

    if(loggedInFromGoogle || loggedInFromEmail){
        console.log("User logged In");
    }

   