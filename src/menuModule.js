import pepperoni from './menu-images/pepperoni.jpeg';
import pepperoniSalami from './menu-images/pepperoniSalami.jpeg';
import supreme from './menu-images/supreme.jpeg';

export const homeModule = (function() {
  const _pizzaImages = [pepperoni, pepperoniSalami, supreme];
  const _pizzaLabels = ['Pepperoni', 'Pepperoni and Salami', 'Supreme'];

  const createMenuElements = () => {
    const elements = [];

    for (let i = 0; i < _pizzaImages.length; i++) {
      let container = document.createElement('div');
      container.classList.add('menu-item-container');

      let img = new Image();
      img.src = _pizzaImages[i];
      img.classList.add('menu-item-image');

      let para = document.createElement('p');
      para.innerText = _pizzaLabels[i];
      para.classList.add('menu-item-description');

      container.appendChild(img);
      container.appendChild(para);
      elements.push(container);
    }

    return elements
  }

  return {
    createMenuElements
  }
})();