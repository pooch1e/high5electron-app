// hi-5 counter

let count = 0;
//add event listener to button
const button = document.querySelector('button');
const counter = document.querySelector('#counter');
// interact on button click
button.addEventListener('click', () => {
  countIncrease();
  renderCount();
});

function countIncrease() {
  count++;
}


function renderCount() {
  counter.innerHTML = count;
  return counter;
}
