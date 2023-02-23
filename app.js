 /* Вася положил 12 000 на вклад 7% годовых
 с капитализацией 1 раз в месяц.
 Вывести в консоль, сможет ли он купить дом
 за 13 500 через 2 года после снятия вклада.
 И остаток после покупки.

Итог = Сумма * (1 + Ставка в месяц не в %) ** срок в месяцах */

//данные
let depo = 12000;
let cost = 13500;
let term = 24;
let incomeMonth = 0.07/12;
let income = depo * (1 + incomeMonth) ** 24;

//результат
if (income>cost) {
    console.log(`You earned: ${income}
You can buy house
Your Residual balance: ${income - cost}`)
} else {
    console.log(`Can not buy house
You earned: ${income}`)
}

