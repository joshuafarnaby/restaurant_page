import { contentBuilder } from './contentBuilder';
import { appendChildNodes } from './domMethods';

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

    appendChildNodes(parentNode, _homePageContent);
  }

  const loadMenuPageContent = (parentNode) => {
    if (!_menuPageContent) {
      _menuPageContent = contentBuilder.buildMenuPageContent();
    }

    appendChildNodes(parentNode, _menuPageContent);
  }

  const loadContactPageContent = (parentNode) => {
    if (!_contactPageContent) {
      _contactPageContent = contentBuilder.buildContactPageContent();
    }

    appendChildNodes(parentNode, _contactPageContent);
  }

  return {
    loadBasicPageStructure,
    loadHomePageContent,
    loadMenuPageContent,
    loadContactPageContent
  }
})();