// hi-5 counter
const counterButton = () => {
  let count = 0;
  //add event listener to button
  const button = document.querySelector('button');
  const counter = document.querySelector('#counter');
  // interact on button click
  button.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
  });
};
counterButton();
