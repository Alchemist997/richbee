$(function () {

    $('.analogs__slider').slick({
        prevArrow: '<button class="slider-arrow slider-arrow-fs slider-arrow-fs--l"></button>',
        nextArrow: '<button class="slider-arrow slider-arrow-fs slider-arrow-fs--r"></button>',
        infinite: false,
        swipeToSlide: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});