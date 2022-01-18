import photo from './pizza.jpg';

export function loadHomePagePhoto() {
  const homePhoto = new Image();
  homePhoto.src = photo;
  homePhoto.alt = 'A very nice pizza';
  homePhoto.classList.add('home-photo');

  return homePhoto;
}

export function loadHomePageText(text) {
  const para = document.createElement('p');
  para.classList.add('home-text');
  para.innerText = 'Welcome to the best restaurant... in the world'

  return para
}