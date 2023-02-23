/* Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).

К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.

Выведете в консоль:

Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите? */

//данные
const salary = 80;
const daysToMove = 11;
const weekends = 2;
let workDays = daysToMove - weekends;
const edHours = 5;
const orderHours = 40;
let orderDays = orderHours/edHours;
let finalSalary = orderHours*80;

//результат
console.log(orderDays<workDays);
console.log(finalSalary);
