import Swiper from '../vendor/swiper.min.js';


document.addEventListener('DOMContentLoaded', () => {
    let bannerSlider = new Swiper('.banner__slider', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.banner__button-next',
            prevEl: '.banner__button-prev',
        },
    });

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
            navigation: {
                nextEl: '.products__button-next',
                prevEl: '.products__button-prev',
            },
            IOSEdgeSwipeDetection: true,
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    freeMode: true,
                    spaceBetween: 15,
                    watchOverflow: false
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    watchOverflow: true,
                    freeMode: false,
                },

                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    watchOverflow: true,
                    freeMode: false,
                },

                1440: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                    watchOverflow: true,
                    freeMode: false,
                }
            }
        });
    });

    let proposSlider = new Swiper('.propos__slider', {
        IOSEdgeSwipeDetection: true,
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                freeMode: true,
                spaceBetween: 15
            },

            992: {
                slidesPerView: 4,
                spaceBetween: 15,
                watchOverflow: true
            }
        }
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

    let accountScrollbar = new Swiper('.ordering__right-items', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar.ordering__right-scrollbar',
        },
        mousewheel: true
    });
});