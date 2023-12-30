//generate random number between 1 and 100
let Computernumber = parseInt(Math.random() * 100 + 1);

//take all the html elements
const userInput = document.getElementById('guessField');
const submit = document.getElementById('subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuesses = [];
let noOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //to validate user guess
  if (isNaN(guess) || guess === '') alert('Please Enter a valid number!');
  else if (guess < 1 || guess > 100)
    alert('Please Enter number between 1 and 100!');
  else {
    prevGuesses.push(guess);
    if (noOfGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was : ${Computernumber}`);
      endGame();
    } else {
      //noOfGuesses are available
      displayGuess(guess);
      checkGuess(guess);
    }
  }

  return true;
}

function checkGuess(guess) {
  //to print the comparison of random num with user guess and display results
  if (guess === Computernumber) {
    displayMessage('Woahh!!! You Guessed it Right!!!');
    endGame();
  } else if (guess < Computernumber) {
    displayMessage('Number is Too LOW!');
  } else {
    displayMessage('Number is Too HIGH');
  }
}

function displayGuess(guess) {
  //to update variables
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  noOfGuesses++;
  remaining.innerHTML = `${11 - noOfGuesses}`;
}

function displayMessage(message) {
  //to do DOM manipulation
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.style.cursor = 'pointer';
  newGameBtn.addEventListener('click', function (event) {
    //reset all the values
    prevGuesses = [];
    noOfGuesses = 1;
    Computernumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML = '';
    remaining.innerHTML = '';
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button'); //add start new game button in p tag
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
