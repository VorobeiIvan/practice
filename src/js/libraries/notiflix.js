// https://github.com/notiflix/Notiflix#readme

Notiflix.Report.failure('No results found', 'Please try another search', 'OK');

Notiflix.Report.info(
  'End of Results',
  "We're sorry, but you've reached the end of search results.",
  'OK'
);

Notiflix.Report.success(
  'Search Results',
  `Hooray! We found ${totalHits} images.`,
  'OK'
);
