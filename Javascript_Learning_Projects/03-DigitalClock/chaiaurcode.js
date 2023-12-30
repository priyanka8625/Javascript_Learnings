const clock = document.getElementById('clock');

// to display current time but it won't be updated continously
// let date = new Date();
// console.log(date.toLocaleTimeString());

//to display continous time updating second by second
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //call function at an interval of every second
