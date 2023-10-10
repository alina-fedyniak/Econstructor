// --------scroll-btn-------
document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".scroll-button");
    var scrollHeight = 740;
    var isFixed = false;

    function handleScroll() {
        var windowWidth = window.innerWidth;

        if (windowWidth >= 740) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop >= scrollHeight && !isFixed) {
                button.style.top = scrollHeight + "px";
                isFixed = true;
            } else if (scrollTop < scrollHeight && isFixed) {
                button.style.top = "";
                isFixed = false;
            }
        }
    }

    var mediaQuery = window.matchMedia("(max-width: 740px)");

    function handleMediaQueryChange(event) {
        if (event.matches) {

            window.removeEventListener("scroll", handleScroll);
            button.style.top = ""; 
            isFixed = false;
        } else {

            window.addEventListener("scroll", handleScroll);
        }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);
});






// -------burger------

document.addEventListener("DOMContentLoaded", function() {
    var burgerIcon = document.querySelector(".burger-icon");
    var burgerMenu = document.querySelector(".burger-menu");

    burgerIcon.addEventListener("click", function() {
        burgerIcon.classList.toggle("active"); // Анимация иконки бургера
        burgerMenu.classList.toggle("active"); // Открытие/закрытие меню

        if (burgerMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden"; // Запрет прокрутки страницы при открытом меню
        } else {
            document.body.style.overflow = ""; // Разрешение прокрутки страницы при закрытом меню
        }
    });
});



// ==========pop_pu=======

document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.getElementById("open_pop");
    var closeButton = document.getElementById("pop_close");
    var popUp = document.querySelector(".pop_up");

    // Добавление класса "active" при нажатии на кнопку "Открыть попап"
    openButton.addEventListener("click", function() {
        popUp.classList.add("active");
    });

    // Удаление класса "active" при нажатии на кнопку "Закрыть попап"
    closeButton.addEventListener("click", function() {
        popUp.classList.remove("active");
    });
});


var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}
