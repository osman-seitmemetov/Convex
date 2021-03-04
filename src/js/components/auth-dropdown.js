document.addEventListener('DOMContentLoaded', () => {
    const headerAuth = document.querySelector('.header__auth');
    const headerAuthBtn = document.querySelector('.header__auth-btn');

    if (headerAuthBtn) {
        headerAuthBtn.addEventListener('click', () => {
            headerAuth.classList.toggle('header__auth--active');
        });
    }
});