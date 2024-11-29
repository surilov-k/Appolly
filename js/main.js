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
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
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

/*
let ajax = new XMLHttpRequest();
ajax.open("GET", "../img/icons/sprite.svg", true);
ajax.send();
ajax.onload = function () {
    let div = document.createElement("div");
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div,document.body.childNodes[0]);
};
*/

let ajax = new XMLHttpRequest();
ajax.open("GET", "../img/icons/sprite.svg", true);

ajax.onload = function () {
    // Перевірка статусу відповіді
    if (ajax.status >= 200 && ajax.status < 300) {
        let div = document.createElement("div");
        div.innerHTML = ajax.responseText;

        // Додаємо атрибут для стилізації або зручності (опціонально)
        div.style.display = "none"; // Ховаємо спрайт із візуального відображення
        div.setAttribute("id", "svg-sprite");

        // Вставляємо на початок тіла документа
        document.body.insertBefore(div, document.body.firstChild);
    } else {
        console.error("Не вдалося завантажити SVG:", ajax.status, ajax.statusText);
    }
};

// Перевірка на помилки запиту
ajax.onerror = function () {
    console.error("Помилка при виконанні запиту до", "../img/icons/sprite.svg");
};

// Відправляємо запит
ajax.send();





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


function toggleSubMune(button) {
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}

const tabs = document.querySelectorAll('.comments-tabs_top-btn');
const all_tabs_content = document.querySelectorAll('.tabs-content_item');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.classList.remove('active') });
        tab.classList.add('active');

        let tabLine = document.querySelector('.comments-tab-line');
        tabLine.style.width = e.target.offsetWidth + "px";
        tabLine.style.left = e.target.offsetLeft + "px";


        all_tabs_content.forEach(content => { content.classList.remove('active') });
        all_tabs_content[index].classList.add('active');

    })
})


/*
let section = document.querySelectorAll('section');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animation');
        }
        else {
            sec.classList.remove('show-animation');
        }
    })
}
    */


const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Якщо секція видима
            entry.target.classList.add('show-animation');
        } 
        //else {
            //entry.target.classList.remove('show-animation');
        //}
    });
}, {
    root: null, // Вікно браузера як область перегляду
    threshold: 0.5 // Мінімум 10% секції у вікні для спрацювання
});

sections.forEach(section => observer.observe(section));

