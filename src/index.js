import './style.css';

const loadHeader = (function() {
  const header = document.createElement('h1');
  header.innerText = 'Pizzeria La Familia';
  
  document.body.insertBefore(header, document.querySelector('#content'));
})();

const loadButtons = (function() {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const buttonLabels = ['home', 'menu', 'contact'];

  buttonLabels.forEach(label => {
    let newBtn = document.createElement('button');
    newBtn.id = label;
    newBtn.innerText = label;
    buttonContainer.appendChild(newBtn);
  })

  document.body.insertBefore(buttonContainer, document.querySelector('#content'));
})();