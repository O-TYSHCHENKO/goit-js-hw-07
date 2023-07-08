import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleresMarkup = createGalleryCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleresMarkup);
galleryContainer.addEventListener('click', onClickImg);
function onClickImg(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const getOriginalImg = evt.target.dataset.source;
  modalLightbox(getOriginalImg);
}
function modalLightbox(originalImg) {
  const instance = basicLightbox.create(`
    <img src="${originalImg}">
`);
  instance.show();
  const evtClickEsc = (e) => {
    if (e.code === 'Escape') {
      instance.close();
      galleryContainer.removeEventListener('keydown', evtClickEsc);
    }
  };
  galleryContainer.addEventListener('keydown', evtClickEsc);
}
function createGalleryCard(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
        </a>
        </li>`;
    })
    .join('');
}
