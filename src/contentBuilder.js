import homePagePhoto from './pizza.jpeg';

import locationPhoto from './location.png';

import pepperoni from './menu-images/pepperoni.jpeg';
import pepperoniSalami from './menu-images/pepperoniSalami.jpeg';
import supreme from './menu-images/supreme.jpeg';

export const contentBuilder = (function() {
  const _pizzaImages = [pepperoni, pepperoniSalami, supreme];
  const _pizzaLabels = ['pepperoni', 'pepperoni and salami', 'supreme']

  const _buildTextElement = (text, className) => {
    const para = document.createElement('p');
    para.textContent = text;
    para.classList.add(className);

    return para
  }

  const _buildImageElement = (src, className) => {
    const img = new Image();
    img.src = src;
    img.classList.add(className);

    return img
  }

  const buildHeader = (headerText, headerClass) => {
    const header = document.createElement('h1');
    header.innerText = headerText;
    header.classList.add(headerClass);

    return header;
  }

  const buildButtons = (buttonLabelsArray) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let newBtn;

    buttonLabelsArray.forEach(label => {
      newBtn = document.createElement('button');
      newBtn.innerText = label;
      newBtn.id = label;
      buttonContainer.appendChild(newBtn)
    })

    return buttonContainer;
  }

  const buildContentDiv = (id) => {
    const contentDiv = document.createElement('div');
    contentDiv.id = id;

    return contentDiv;
  }

  const buildHomePageContent = () => {
    let homeText = 'Welcome to the best restaurant... in the world';

    const elements = [];
    elements.push(_buildImageElement(homePagePhoto, 'home-photo'));
    elements.push(_buildTextElement(homeText, 'home-text'));

    return elements;
  }

  const buildMenuPageContent = () => {
    const elements = [];

    let container;
    let image;
    let description;

    for (let i = 0; i < _pizzaLabels.length; i++) {
      container = document.createElement('div');
      container.classList.add('menu-item-container');

      image = _buildImageElement(_pizzaImages[i], 'menu-item-image');
      description = _buildTextElement(_pizzaLabels[i], 'menu-item-description');

      container.appendChild(image);
      container.appendChild(description);
      elements.push(container)
    }

    return elements;
  }

  const buildContactPageContent = () => {
    let locationText = 'Location: London, UK';
    let phoneNumber = 'Contact Number: 555-12345-321';
    let openingHours = '24/7 365'

    const elements = [];

    elements.push(_buildImageElement(locationPhoto, 'location-image'));
    elements.push(_buildTextElement(locationText, 'contact-info'));
    elements.push(_buildTextElement(phoneNumber, 'contact-info'));
    elements.push(_buildTextElement(openingHours, 'contact-info'));

    return elements
  }

  return {
    buildHeader,
    buildButtons,
    buildContentDiv,
    buildHomePageContent,
    buildMenuPageContent,
    buildContactPageContent
  }
})();