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
    if (window.scrollY > 8400) {
        // Применяем стили для случая, когда скролл больше 700 пикселей
        document.body.style.backgroundColor = '#BEBEBE';
        document.body.style.color = 'black';
        if (window.scrollY > 9600) {
            // Применяем стили для случая, когда скролл больше 600 пикселей
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }
});



// ------parralax------

// document.addEventListener('DOMContentLoaded', function () {
//     const parallaxContainer = document.querySelector('.parallax-container');
//     const parallaxText = document.querySelector('.parallax-text');

//     window.addEventListener('scroll', function () {
//         const scrollTop = window.scrollY;
//         const offset = -scrollTop * 0.5;
//         // Измените коэффициент для более или менее сильного эффекта параллакса
//         const textColor = scrollTop > 100 ? 'black' : 'white';
//         // Измените цвет текста в зависимости от скролла

//         parallaxContainer.style.transform = `translateY(${offset}px)`;
//         // parallaxText.style.color = textColor;å
//     });
// });
