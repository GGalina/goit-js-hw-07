import { galleryItems } from './gallery-items.js';

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>`}).join(``);
};

const galleryContainerEl = document.querySelector(".gallery");
const galleryImgsEl = createGalleryItems(galleryItems);

galleryContainerEl.insertAdjacentHTML(`afterbegin`, galleryImgsEl);

const slider = new SimpleLightbox('.gallery__item', { captions:true, captionSelector:'img', captionType:'attr', captionsData: 'alt', captionDelay: 250});