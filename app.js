/* Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).

К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.

Выведете в консоль:

Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите? */
let salary = 80;
let daysToMove = 11;
let weekends = 2;
let workDays = daysToMove - weekends;
let edHours = 5;
let orderHours = 40;
let orderDays = orderHours/edHours;
let finalSalary = (orderDays*edHours)*80;
console.log(orderDays<workDays);
console.log(finalSalary);
