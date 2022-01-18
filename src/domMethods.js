export const appendChildNodes = (parent, elementsArray) => {
  elementsArray.forEach(element => parent.appendChild(element));
}

export const changeClass = (element, classToRemove, classToAdd) => {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);
}