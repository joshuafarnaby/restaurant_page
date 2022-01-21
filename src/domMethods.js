// export const appendChildNodes = (parent, elementsArray) => {
//   elementsArray.forEach(element => parent.appendChild(element));
// }

// export const changeClass = (element, classToRemove, classToAdd) => {
//   element.classList.remove(classToRemove);
//   element.classList.add(classToAdd);
// }

// export const removeChildren = (parent) => {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   };
// }

export const modifyDOM = (function() {
  const appendChildNodes = (parentNode, elementsArray) => {
    elementsArray.forEach(element => parentNode.appendChild(element));
  }

  const setButtonActiveClass = (buttons, currentPage) => {
    buttons.forEach(button => {
      if (button.id == currentPage) {
        button.classList.add('active');
      }
    })
  }

  const changeButtonActiveClass = (buttons, currentPage, nextPage) => {
    buttons.forEach(button => {
      if (button.id == currentPage) {
        button.classList.remove('active');
      }
    })

    setButtonActiveClass(buttons, nextPage)
  }

  return {
    appendChildNodes,
    setButtonActiveClass,
    changeButtonActiveClass
  }
})();