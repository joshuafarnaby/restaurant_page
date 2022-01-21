import { contentBuilder } from './contentBuilder';
import { modifyDOM } from './domMethods';

export const contentLoader = (function() {
  let _homePageContent;
  let _menuPageContent;
  let _contactPageContent;

  const loadBasicPageStructure = () => {
    document.body.appendChild(contentBuilder.buildHeader('Pizzeria La Familia', 'header'));
    document.body.appendChild(contentBuilder.buildButtons(['home', 'menu', 'contact']));
    document.body.appendChild(contentBuilder.buildContentDiv('content'));
  }

  const loadHomePageContent = (parentNode) => {
    if (!_homePageContent) {
      _homePageContent = contentBuilder.buildHomePageContent()
    }

    modifyDOM.appendChildNodes(parentNode, _homePageContent);
  }

  const loadMenuPageContent = (parentNode) => {
    if (!_menuPageContent) {
      _menuPageContent = contentBuilder.buildMenuPageContent();
    }

    modifyDOM.appendChildNodes(parentNode, _menuPageContent);
  }

  const loadContactPageContent = (parentNode) => {
    if (!_contactPageContent) {
      _contactPageContent = contentBuilder.buildContactPageContent();
    }

    modifyDOM.appendChildNodes(parentNode, _contactPageContent);
  }

  const loadDefault = (parentNode, defaultPage) => {
    parentNode.classList.add(defaultPage);
    
    if (defaultPage == 'home') {
      loadHomePageContent(parentNode);
    } else if (defaultPage == 'menu') {
      loadMenuPageContent(parentNode);
    } else {
      loadContactPageContent(parentNode);
    }
  }

  return {
    loadBasicPageStructure,
    loadHomePageContent,
    loadMenuPageContent,
    loadContactPageContent,
    loadDefault
  }
})();