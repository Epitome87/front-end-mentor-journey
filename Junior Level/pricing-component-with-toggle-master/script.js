let checkbox = document.querySelector('input[type=checkbox]');
let basicPriceElement = document.querySelector('#price--basic .amount-span');
let proPriceElement = document.querySelector('#price--pro .amount-span');
let masterPriceElement = document.querySelector('#price--master .amount-span');

console.log(checkbox);

checkbox.addEventListener('click', (event) => {
  if (checkbox.checked) {
    // Set 'Monthly' values
    basicPriceElement.textContent = '19.99';
    proPriceElement.textContent = '24.99';
    masterPriceElement.textContent = '39.99';
  } else {
    basicPriceElement.textContent = '199.99';
    proPriceElement.textContent = '249.99';
    masterPriceElement.textContent = '399.99';
  }
});
