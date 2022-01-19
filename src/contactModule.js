import location from './location.png';

export const contactModule = (function() {
  const _locationImage = (function() {
    const img = new Image();
    img.src = location;
    img.classList.add('location-image');

    return img;
  })();

  const _locationInfo = (function() {
    const para = document.createElement('p');
    para.textContent = 'Location: London, UK';
    para.classList.add('contact-info');

    return para;
  })();


  const getLocationImage = () => _locationImage
  const getLocationInfo = () => _locationInfo;

  return {
    getLocationImage,
    getLocationInfo
  }
})();