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

galleryEl.addEventListener("click", (event) => {

let lightbox = new SimpleLightbox('.gallery a', {
    showCounter: true,
    captions: true,
    animationSpeed: 250,
    captionsData: 'alt',
    captionDelay: 250,
});

event.preventDefault();
console.log(lightbox);
     });


  








