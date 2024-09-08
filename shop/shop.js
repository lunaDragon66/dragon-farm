// Количество золота (должно быть получено от игрока)
let gold = 100; // Например, игрок начинает со 100 золота

// Обновляем отображение количества золота
const goldAmountElement = document.getElementById('gold-amount');
// Получаем текущее количество золота из localStorage
gold = parseInt(localStorage.getItem('gold')) || 0;
goldAmountElement.textContent = gold;

// Функция для покупки яйца
function buyEgg() {
    const eggPrice = 50; // Цена яйца

    if (gold >= eggPrice) {
        gold -= eggPrice; // Списываем золото
        goldAmountElement.textContent = gold; // Обновляем отображение золота
        alert("Вы купили яйцо дракона!");
    } else {
        alert("Недостаточно золота для покупки яйца.");
    }
}

// Назначаем обработчик клика на кнопку покупки
document.getElementById('buy-egg').addEventListener('click', buyEgg);

