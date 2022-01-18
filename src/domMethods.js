export const appendChildNodes = (parent, elementsArray) => {
  elementsArray.forEach(element => parent.appendChild(element));
}