const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) //1000 for 1s or 2000 for 2s
