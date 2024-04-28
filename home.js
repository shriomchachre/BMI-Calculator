const form = document.querySelector('form');

form.addEventListener('submit', function (e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Height Ke Sath Majak Nahi ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Weight Ke Sath Majak Nahi ${weight}`;
  }
  else{
    const bmi = (weight/ ((height*height)/10000)).toFixed(2);
    
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi} <Under Weight</span>`
    }
    else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi} Over Weight</span>`
    }
    else results.innerHTML = `<span>${bmi} Normal</span>`
  }

});