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

