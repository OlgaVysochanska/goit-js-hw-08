import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const newImg = ({ preview, original, description }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  ;

const makeGallery = galleryItems.map(newImg).join("");

gallery.insertAdjacentHTML("afterbegin", makeGallery);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });