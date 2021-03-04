// Search
document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('.header__search input');
    const placeholder = document.querySelector('.header__search-placeholder');
    const inputIcon = document.querySelector('.header__search-icon');
    const inputDropdown = document.querySelector('.header__search-dropdown');
    const inputBG = document.querySelector('.search-bg');

    inputSearch.addEventListener('focus', () => {
        placeholder.classList.add('header__search-placeholder--hidden');
        inputIcon.classList.remove('header__search-icon--hidden');
        inputBG.classList.add('search-bg--active');
    });

    inputSearch.addEventListener('input', () => {
        inputDropdown.classList.remove('header__search-dropdown--hidden');

        if (inputSearch.value === '') {
            inputDropdown.classList.add('header__search-dropdown--hidden');
        }
    });

    inputSearch.addEventListener('blur', () => {
        placeholder.classList.remove('header__search-placeholder--hidden');
        inputIcon.classList.add('header__search-icon--hidden');
        inputDropdown.classList.add('header__search-dropdown--hidden');
        inputBG.classList.remove('search-bg--active');

        if (inputSearch.value !== '') {
            placeholder.classList.add('header__search-placeholder--hidden');
            inputIcon.classList.remove('header__search-icon--hidden');
        }
    });
});