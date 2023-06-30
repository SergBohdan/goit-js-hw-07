import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup({ preview, original, description }) {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              width="2000" 
              height="900"
            />
          </a>
        </li>
      `;
    }
    
    function openModal(event) {
      event.preventDefault();
      if (event.target.nodeName !== 'IMG') {
        return;
      }
      
      const imageSrc = event.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${imageSrc}" alt="" />`);
      instance.show();
    }
    
    gallery.innerHTML = galleryItems
      .map(item => createMarkup(item))
      .join('');
    
    gallery.addEventListener('click', openModal);
    