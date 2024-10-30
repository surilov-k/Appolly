$(document).ready(function () {

    var rev = $('.slider');
    rev.on('init', function (event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next().next(),
            prev = cur.prev().prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next().next(),
            prev = cur.prev().prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        dots: true,
        arrows: true,
        speed: 700,
        prevArrow: `<button class="slick-prev slick-arrow"><svg class="icon slider-icon">
            <use xlink:href="#sprt-arrow-left-b"></use>
                    </svg></button>`,
        nextArrow: `<button class="slick-next slick-arrow"><svg class="icon slider-icon">
            <use xlink:href="#sprt-arrow-left-b"></use>
                    </svg></button>`,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    var rev = $('.rev_slider');
    rev.on('init', function (event, slick, currentSlide) {
        var
            cur = $(slick.$slides[slick.currentSlide]),
            next = cur.next(),
            prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log('beforeChange');
        var
            cur = $(slick.$slides[nextSlide]);
        console.log(slick.$prev, slick.$next);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
            prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '0',
        swipe: true,
        adaptiveHeight: true,
        customPaging: function (slider, i) {
            return '';
        },
    });


    const slideCenterWidth = document.querySelector('.slick-center');
    const sliderIphoneOverlay = document.querySelector('.slider-iphone-overlay');

    function updateOverlaySize() {
        sliderIphoneOverlay.style.width = `${slideCenterWidth.offsetWidth}px`;
        sliderIphoneOverlay.style.height = `${slideCenterWidth.offsetHeight}px`;
    }

    // Обновляем размеры при загрузке страницы
    updateOverlaySize();

    // Используем ResizeObserver для отслеживания изменений размеров
    const observer = new ResizeObserver(updateOverlaySize);
    observer.observe(slideCenterWidth);

});


let ajax = new XMLHttpRequest();
ajax.open("GET", "../img/icons/sprite.svg", true);
ajax.send();
ajax.onload = function () {
    let div = document.createElement("div");
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div,
        document.body.childNodes[0]
    );
};

let humMenuBtn = document.querySelector('.hum-menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let mobOverlay = document.querySelector('.mob-menu-overlay');

humMenuBtn.addEventListener('click', function () {
    humMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobOverlay.classList.toggle('active');
});
mobOverlay.addEventListener('click', function () {
    humMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobOverlay.classList.toggle('active');
});

