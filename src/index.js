import './style.css';
import { contentLoader } from './contentLoader';
import { modifyDOM } from './domMethods';

const displayController = (function() {
  contentLoader.loadBasicPageStructure();

  const contentDiv = document.getElementById('content');
  const pageButtons = document.querySelectorAll('.button-container button');

  let currentPage = 'home';
  let nextPage;

  contentLoader.loadDefault(contentDiv, currentPage);
  modifyDOM.setButtonActiveClass(pageButtons, currentPage)

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

    modifyDOM.changeButtonActiveClass(pageButtons, currentPage, nextPage);
    contentDiv.classList.add(nextPage)
    currentPage = nextPage;
  }

  pageButtons.forEach(button => {
    button.addEventListener('click', changeDisplay)
  })
})();