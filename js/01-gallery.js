import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryTabsContainer = galleryItems.map((image) => {
  return ` <a class = "gallery__item" href = "${image.original}" rel="noopener noreferrer">
<img class = "gallery__image" alt = "${image.description}" src = "${image.preview}" data-source="${image.original}"></a>`;
});

galleryEl.insertAdjacentHTML("afterbegin", galleryTabsContainer.join(""));

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log('target - здесь событие',event.target);
  // console.log('currentTarget - здесь слушатель',event.currentTarget);
  // console.log(event.target.dataset.source);
  const currentLink = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src = "${currentLink}">
        <a>Close</a>
    </div>
`,
    {
      onShow: (instance) => {
        instance.element().querySelector("a").onclick = instance.close;
      },
    }
  );

  instance.show();
});
