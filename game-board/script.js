// Функция для генерации случайного числа в диапазоне от min до max
function getRandomGoldAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для обновления отображения золота на странице
function updateGoldDisplay() {
    const goldAmount = getRandomGoldAmount(10, 200); // Генерация случайного количества золота
    const goldAmountElement = document.getElementById('gold-amount');
    goldAmountElement.textContent = goldAmount; // Обновление текста на странице
}

// Запуск функции при загрузке страницы
window.onload = updateGoldDisplay;
