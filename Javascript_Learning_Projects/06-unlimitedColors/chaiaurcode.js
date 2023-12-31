const start = document.getElementById('start');
const stop = document.getElementById('stop');
let reference;

//generate a random color
function randomColor() {
  const hexCodeValue = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCodeValue[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColor() {
  document.body.style.backgroundColor = randomColor();
}

//event handling
start.addEventListener('click', (e) => {
  if (!reference) {
    //if reference != null
    reference = setInterval(changeColor, 1000);
  }
});

stop.addEventListener('click', (e) => {
  clearInterval(reference);
  reference = null; //clean up reference to prevent memory over utilization
});
