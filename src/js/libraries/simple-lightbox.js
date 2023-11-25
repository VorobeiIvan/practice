// https://simplelightbox.com/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
});

function initializeLightbox() {
  if (lightbox && lightbox.destroy) {
    lightbox.destroy();
  }

  lightbox = new SimpleLightbox('.gallery-link', {
    captions: true,
  });
}
