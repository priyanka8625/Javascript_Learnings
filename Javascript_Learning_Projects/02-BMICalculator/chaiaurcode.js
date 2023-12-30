const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //to prevent the default get or post action of form submit event

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height))
    results.innerHTML = `Please give a valid height ${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight))
    results.innerHTML = `Please give a valid weight ${weight}`;
  else {
    // The formula for BMI is weight in kilograms divided by height in meters squared
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let range = '';
    if (bmi < 18.6) range = 'Under Weight';
    else if (bmi >= 18.6 && bmi <= 24.9) range = 'Normal Weight';
    else range = 'Over Weight';
    //show results
    results.innerHTML = `<spna>${bmi}</span> => ${range}`;
  }
});
