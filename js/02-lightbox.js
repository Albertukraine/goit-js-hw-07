import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryEl = document.querySelector(".gallery");

const galleryTabsContainer = galleryItems.map((image) => {
  return ` <a class = "gallery__item" href = "${image.original}">
<img class = "gallery__image" alt = "${image.description}" src = "${image.preview}"></a>`;
});

galleryEl.insertAdjacentHTML("afterbegin", galleryTabsContainer.join(""));

console.log(galleryEl);



let lightbox = new SimpleLightbox('.gallery a', {
    showCounter: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});




  








