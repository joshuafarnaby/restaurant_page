import './style.css';
import { loadHomePagePhoto, loadHomePageText} from './homeModule';
import { appendChildNodes } from './domMethods';

const loadHeader = (function() {
  const header = document.createElement('h1');
  header.innerText = 'Pizzeria La Familia';
  header.classList.add('header')
  
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

const pageController = (function() {
  const pageButtons = document.querySelectorAll('.button-container button');
  const contentDiv = document.getElementById('content');

  const homePageElements = [loadHomePagePhoto(), loadHomePageText()];

  const changePage = (event) => {
    if (event.target.classList.contains('active')) return;

    if (event.target.id == 'home') {
      appendChildNodes(contentDiv, homePageElements);
      contentDiv.classList.add(event.target.id)
      event.target.classList.add('active');
    }
  }

  pageButtons.forEach(button => {
    button.addEventListener('click', changePage)
  });
})(); 