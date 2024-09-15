// Функция для генерации случайного числа в диапазоне от min до max
function getRandomGoldAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для отображения золота на странице
function updateGoldDisplay() {
    const goldAmountElement = document.getElementById('gold-amount');

    // Проверяем, есть ли золото в localStorage
    let gold = localStorage.getItem('gold');

    if (gold === null) {
        // Если золото не найдено, генерируем новое количество
        gold = getRandomGoldAmount(10, 1000);
        localStorage.setItem('gold', gold); // Сохраняем золото в localStorage
    } else {
        // Если золото уже есть, преобразуем его к числу
        gold = parseInt(gold);
    }

    // Обновляем отображение золота на странице
    goldAmountElement.textContent = gold;
}

// Функция для отображения яиц драконов на странице
function updateEggsDisplay() {
    const eggsAmountElement = document.getElementById('eggs-amount');
    let eggs = localStorage.getItem('dragonEggs') || 0;
    eggsAmountElement.textContent = eggs;
}

// Запуск функций при загрузке страницы
window.onload = function() {
    updateGoldDisplay();
    updateEggsDisplay();
};

// При выходе из игры удаляем все игровые данные из локального хранилища
document.getElementById('exit').addEventListener('click', function () {
    localStorage.clear();
});