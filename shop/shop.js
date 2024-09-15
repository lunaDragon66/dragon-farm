// Заходим в магазин
// Берём золото из локального хранилища
// И записываем его в переменную gold
let gold = parseInt(localStorage.getItem('gold')) || 0;
// Создаём переменную goldAmountElement, чтобы обратиться к элементу gold-amount
const goldAmountElement = document.getElementById('gold-amount');
goldAmountElement.textContent = gold;
// Берём яйца из локального хранилища
// И записываем их в переменную dragonEggs
let dragonEggs = parseInt(localStorage.getItem('dragonEggs')) || 0;
// Записываем количество яиц в переменную eggsAmountElement
function updateEggsDisplay() {
    const eggsAmountElement = document.getElementById('eggs-amount');
    eggsAmountElement.textContent = dragonEggs;
}
// Покупка яиц
function buyEgg() {
    const eggPrice = 50;
    if (gold >= eggPrice) {
        gold -= eggPrice;
        ++dragonEggs;
        localStorage.setItem('gold', gold);
        localStorage.setItem('dragonEggs', dragonEggs);
        goldAmountElement.textContent = gold;
        alert("Вы купили яйцо дракона!");
        updateEggsDisplay();
    } else {
        alert("Недостаточно золота для покупки яйца.");
    }
}
// Покупаем яйцо при нажатии на кнопку "Купить яйцо"
document.getElementById('buy-egg').addEventListener('click', buyEgg);
// Показываем количество яиц при загрузке страницы
updateEggsDisplay();

