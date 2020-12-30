import Swiper from '../vendor/swiper.min.js';

// let swiper = new Swiper('.banner__slider', {
//     slidesPerView: 1,
//     loop: true,
//     autoplay: true,
//     navigation: {
//       nextEl: '.banner__button-next',
//       prevEl: '.banner__button-prev',
//     },
// });

// let products = new Swiper('.products__slider', {
//     slidesPerView: 4,
//     spaceBetween: 60,
//     navigation: {
//       nextEl: '.products__button-next',
//       prevEl: '.products__button-prev',
//     },
// });

let productSlider = document.querySelectorAll('.products__slider');

productSlider.forEach(el => {
    new Swiper(el, {
        slidesPerView: 4,
        spaceBetween: 60,
        navigation: {
            nextEl: '.products__button-next',
            prevEl: '.products__button-prev',
        },
    });
});

let selectSwiper = new Swiper('.select__body', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
});

let scrollbar = new Swiper('.ordering__right-items', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
});