import './style.css';
import { contentLoader } from './contentLoader';

const displayController = (function() {
  contentLoader.loadBasicPageStructure();

  const contentDiv = document.getElementById('content');
  const pageButtons = document.querySelectorAll('.button-container button');

  let currentPage;
  let nextPage;

  contentLoader.loadHomePageContent(contentDiv);
  contentDiv.classList.add('home');
  currentPage = 'home'

  const changeDisplay = (event) => {
    if (event.target.id == currentPage) return;

    nextPage = event.target.id;
    contentDiv.innerHTML = '';
    contentDiv.classList.remove(currentPage)

    if (nextPage == 'home') {
      contentLoader.loadHomePageContent(contentDiv);
    } else if (nextPage == 'menu') {
      contentLoader.loadMenuPageContent(contentDiv);
    } else {
      contentLoader.loadContactPageContent(contentDiv);
    }

    contentDiv.classList.add(nextPage)
    currentPage = nextPage;
  }

  pageButtons.forEach(button => {
    button.addEventListener('click', changeDisplay)
  })
})()



// const loadHeader = (function() {
//   const header = document.createElement('h1');
//   header.innerText = 'Pizzeria La Familia';
//   header.classList.add('header')
  
//   document.body.insertBefore(header, document.querySelector('#content'));
// })();

// const loadButtons = (function() {
//   // what about making an IIFE that controls the buttons and exporting a 'buildButtons' function to pageController?
//   const buttonContainer = document.createElement('div');
//   buttonContainer.classList.add('button-container');

//   const buttonLabels = ['home', 'menu', 'contact'];

//   buttonLabels.forEach(label => {
//     let newBtn = document.createElement('button');
//     newBtn.id = label;
//     newBtn.innerText = label;
//     buttonContainer.appendChild(newBtn);
//   })

//   document.body.insertBefore(buttonContainer, document.querySelector('#content'));
// })();

// const pageController = (function() {
//   const pageButtons = document.querySelectorAll('.button-container button');
//   // why not create a getter function in buttons module?
//   const contentDiv = document.getElementById('content');

//   let currentPage;
//   let nextPage;

//   const homePageElements = [loadHomePagePhoto(), loadHomePageText()];
//   const menuElements = menuModule.createMenuElements();
//   const contactElements = [contactModule.getLocationImage(), contactModule.getLocationInfo()]

//   const changeActiveButton = (current, next) => {
//     pageButtons.forEach(button => {
//       if (button.id == current) button.classList.remove('active');
//       if (button.id == next) button.classList.add('active');
//     })
//   }

//   const changePage = (event) => {
//     if (event.target.classList.contains('active')) return;

//     nextPage = event.target.id;
//     removeChildren(contentDiv);

//     if (event.target.id == 'home') {
//       appendChildNodes(contentDiv, homePageElements);
//     } else if (event.target.id == 'menu') {
//       appendChildNodes(contentDiv, menuElements);
//     } else {
//       appendChildNodes(contentDiv, contactElements);
//     }

//     changeClass(contentDiv, currentPage, nextPage)
//     changeActiveButton(currentPage, nextPage)
//     currentPage = nextPage;
//   }

//   pageButtons.forEach(button => {
//     button.addEventListener('click', changePage);
//     // create an event listener function in button module?
//   });

//   appendChildNodes(contentDiv, homePageElements);
//   contentDiv.classList.add('home');
//   document.querySelector('#home').classList.add('active');
//   currentPage = 'home'
// })(); 