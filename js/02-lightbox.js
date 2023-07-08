import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleresMarkup = createGalleryCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleresMarkup);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryCard(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" 
        alt="${description}" />
        </a>
        </li>`;
    })
    .join('');
}
