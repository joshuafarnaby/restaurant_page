import './style.css';
import { loadHomePagePhoto, loadHomePageText} from './homeModule';
import { appendChildNodes, changeClass } from './domMethods';
import { homeModule } from './menuModule';

const loadHeader = (function() {
  const header = document.createElement('h1');
  header.innerText = 'Pizzeria La Familia';
  header.classList.add('header')
  
  document.body.insertBefore(header, document.querySelector('#content'));
})();

const loadButtons = (function() {
  // what about making an IIFE that controls the buttons and exporting a 'buildButtons' function to pageController?
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
  // why not create a getter function in buttons module?
  const contentDiv = document.getElementById('content');

  let currentPage;
  let nextPage;

  const homePageElements = [loadHomePagePhoto(), loadHomePageText()];
  const menuElements = homeModule.createMenuElements();

  const changeActiveButton = (current, next) => {
    pageButtons.forEach(button => {
      if (button.id == current) button.classList.remove('active');
      if (button.id == next) button.classList.add('active');
    })
  }

  const clearElements = () => contentDiv.innerHTML = ''

  const changePage = (event) => {
    if (event.target.classList.contains('active')) return;

    nextPage = event.target.id;
    clearElements()

    if (event.target.id == 'home') {
      appendChildNodes(contentDiv, homePageElements);
      changeClass(contentDiv, currentPage, nextPage);
    } else if (event.target.id == 'menu') {
      appendChildNodes(contentDiv, menuElements)
      changeClass(contentDiv, currentPage, nextPage)
    } else {
      console.log('contact');
    }

    changeActiveButton(currentPage, nextPage)
    currentPage = nextPage;
  }

  pageButtons.forEach(button => {
    button.addEventListener('click', changePage);
    // create an event listener function in button module?
  });

  appendChildNodes(contentDiv, homePageElements);
  contentDiv.classList.add('home');
  document.querySelector('#home').classList.add('active');
  currentPage = 'home'
})(); 