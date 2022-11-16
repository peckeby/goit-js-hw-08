// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryLink = galleryItems
.map((item) => `<a class="gallery__item" href="${item.original}">
<img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`)
.join("");

gallery.insertAdjacentHTML("afterbegin", galleryLink);

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250ms',
});