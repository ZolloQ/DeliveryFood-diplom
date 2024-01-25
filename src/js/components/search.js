// search.js

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.control__btn--search');
  const searchForm = document.querySelector('.control__search-form');
  const searchInput = document.querySelector('.control__search-input');

  searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    searchForm.classList.toggle('control__search-form--active');
    if (searchForm.classList.contains('control__search-form--active')) {
      searchInput.focus();
    }
  });
});
