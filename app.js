function logUserName(name, surname) {
    console.log(`My name is ${name} ${surname}`)
}
logUserName("Mark", "Maximov")

function income(dep, rate, month) {
    const sum = dep*(1+rate/12)**month;
    return sum;
}

console.log(income (1000, 0.07, 24))

function evenOrOdd(number) {
    let a = number%2==0;
    if (a == true) {
        a="Even";
      } else if (a == false) { 
        a="Odd";
      };
    return a;
}

console.log(evenOrOdd(-44));
console.log(11%2)

function toPower(num, power) {
  const res = num ** power;
  return res;
}
console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPower(2, 3));

/*Задание для упражнения:

Пользователь:
-Возраст
-Наличие работы
-Деньги
Нужно проверить может ли он купить новый MacBook за 2000?
Он может брать не только свои деньги, но и взять кредит.
Ему дадут 500, только если ему больше 24-х лет и он имеет работу,
100 если ему просто больше 24-х лет и 0 в ином случае.
Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.*/

const macPrice = 2000;

function canBuyMac(wealth, age, work) {
  if (wealth>macPrice) {
    return true;
  } else if (wealth>=1500 && age>=24 && work===true) {
    return true;
  } else if (wealth>=1900 && age>=24 && !work===true) {
    return true;
  } else {
    return false;
  }
}

console.log(canBuyMac(1950, 26, false))

const roles = ['admin', 'user', 'superUser'];
console.log(roles);

const users = ['Jhon', 'Bob', 'Sam'];
console.log(users);
users[2] = 'Caren';
console.log(users);
users.push('Miles');
console.log(users);
users.unshift('Patrik');
console.log(users);
const g = users.unshift('Boris');
console.log(g);
console.log(users);
console.log(`hello`)
users.shift()
console.log(users);
users.pop();
console.log(users);
users.pop('Patrik');
console.log(users);

const team = ['admin', 'user', 'superuser', 'ceo'];
console.log(team.indexOf('superuser'))
console.log(team.includes('admin'));
console.log(team.slice(2));
console.log(team.slice(2,4));
team.slice(1,2)
console.log(team.slice(1,2))
console.log(team)
console.log(team.splice(1,1))
/*Дан список задач

const tasks = ['Задача 1'];
Сделать функции:

Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив*/

const tasks = ['Задача 1'];
console.log(tasks);
const res1 = tasks.push('Задача2');
console.log(tasks);
const res2 = tasks.push('Задача3');
console.log(tasks);
const res3 = tasks.splice('Задача2');
console.log(tasks)
console.log
console.log

