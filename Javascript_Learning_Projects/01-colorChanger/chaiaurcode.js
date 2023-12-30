// const greySwitch = document.getElementById('grey');
// const whiteSwitch = document.getElementById('white');
// const yellowSwitch = document.getElementById('yellow');
// const blueSwitch = document.getElementById('blue');

const colorSwitchers = document.querySelectorAll('.button');
const body = document.body;

colorSwitchers.forEach((button) => {
  button.addEventListener('click', (event) => {
    body.style.backgroundColor = `${event.target.id}`;
  });
});
