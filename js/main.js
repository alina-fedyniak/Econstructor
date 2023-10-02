window.addEventListener('scroll', function () {
    // Проверяем, прокручен ли скролл на 200 пикселей и больше
    if (window.scrollY > 3100) {
        // Применяем стили для случая, когда скролл больше 200 пикселей
        document.body.style.backgroundColor = '#BEBEBE';
        document.body.style.color = 'black';

        // Проверяем, прокручен ли скролл на 600 пикселей и больше
        if (window.scrollY > 5100) {
            // Применяем стили для случая, когда скролл больше 600 пикселей
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    } else {
        // Возвращаем исходные стили, если скролл меньше 200 пикселей
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
    if (window.scrollY > 8500) {
        // Применяем стили для случая, когда скролл больше 700 пикселей
        document.body.style.backgroundColor = '#BEBEBE';
        document.body.style.color = 'black';
        if (window.scrollY > 9250) {
            // Применяем стили для случая, когда скролл больше 600 пикселей
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".scroll-button");
    var scrollHeight = 740; 
    var isFixed = false;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop >= scrollHeight && !isFixed) {
            button.style.top = scrollHeight + "px";
            isFixed = true;
        } else if (scrollTop < scrollHeight && isFixed) {
            button.style.top = "";
            isFixed = false;
        }
    });
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
