import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createMarkup(items) {
    return items
      .map(({ preview, original, description }) => {
        return `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" width="2000" 
              height="900" />
            </a>
          </li>
        `;
      })
      .join('');
  }
  
  
  const galleryMarkup = createMarkup(galleryItems);
  gallery.innerHTML = galleryMarkup;
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
  });

  

 
