const swiper1 = new Swiper('.swiper-container-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    breakpoints: {
        375: {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        768: {
            spaceBetween: 0,
            slidesPerView: 2.4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        1280: {
            spaceBetween: 60,
            slidesPerView: 3.4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        1680: {
            spaceBetween: 120,
            slidesPerView: 4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },
    }
});

const swiper2 = new Swiper('.s-content-filter-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    navigation: {
        nextEl: '.s-content__filter-next',
        prevEl: '.s-content__filter-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            speed: 1000,
            centeredSlides: true,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1280: {
            spaceBetween: 30,
            slidesPerView: 3,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1680: {
            spaceBetween: 27,
            slidesPerView: 5,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },
    }
});
