// https://simplelightbox.com/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
});

// оновлення після кожного добавлення чи сабміті
lightbox.refresh();
