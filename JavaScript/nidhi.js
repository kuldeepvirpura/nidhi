$('.testi5').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
    dots: true,
    autoplay: true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        1024: {
            items: 3
        }
    }
})