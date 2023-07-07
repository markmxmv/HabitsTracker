'use strict';
let habits = [];
const HABIT_KEY = 'HABIT_KEY';
let globalActiveHabbitId;

/* page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progress__percent: document.querySelector('.progress__percent'),
        progress__cover_bar: document.querySelector('.progress__cover_bar')
    },
    body: {
        days: document.querySelector('.days'),
        adding_day: document.querySelector('.adding')
    }
}

/* utils */
function loadData() {
    const habitsString = localStorage.getItem(HABIT_KEY);
    const habitArray = JSON.parse(habitsString);
    if (Array.isArray(habitArray)) {
        habits = habitArray;
    }
}

function saveData() {
    localStorage.setItem(HABIT_KEY, JSON.stringify(habits))
}

/* render */
function rerenderMenu(activeHabit) {
    if (!activeHabit) {
        return;
    }
    for (const habit of habits) {
        const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);
        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habit-id', habit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habit.id));
            element.innerHTML = `<img src="./images/${habit.icon}.svg" alt="${habit.name}" />`;
            if (activeHabit.id === habit.id) {
                element.classList.add("menu__item_active")
            } 
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabit.id === habit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    };
}

function rerenderHead(activeHabit) {
    if (!activeHabit) {
        return;
    };
    page.header.h1.innerText = activeHabit.name;
    const progress = (activeHabit.days.length/activeHabit.target)*100;
    if (progress>100) {
        progress = 100
    }
    page.header.progress__percent.innerText = `${progress.toFixed(0)}%`;
    page.header.progress__cover_bar.setAttribute('style', `width: ${progress.toFixed(0)}%`)
}

function rerenderBody(activeHabit) {
    page.body.days.innerHTML = ''
    if(!activeHabit) {
        return;
    }

    for(let i = 0; i<activeHabit.days.length; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('habit');
            dayElement.innerHTML =
            `<div class="habit__day"">День ${i+1}</div>
            <div class="habit__comment">${activeHabit.days[i].comment}</div>
            <button class="habit__delete" onclick="deleteDays(${i})">
            <img src="images/delete.svg"}"alt="Delete">
            </button>`;
           
            
            page.body.days.appendChild(dayElement)
    }
    document.querySelector('.addingDay').innerText = `День ${activeHabit.days.length + 1}`
}

/* work with days */

function addDays(event) {
    const form = event.target;
    event.preventDefault();
    const data = new FormData(form);
    const comment = data.get('comment');
    form['comment'].classList.remove('error')
    if (!comment) {
        form['comment'].classList.add('error')
    }
    document.querySelector('.input_icon').addEventListener('keydown', (e) => {
        console.log(e)
        if (e.code!='Enter') {
            form['comment'].classList.remove('error');
        };
    });
    
    habits = habits.map(habit => {
        if (habit.id === globalActiveHabbitId && comment) {
            return {
                ...habit,
                days: habit.days.concat([{comment}])
            }
        } else {return habit;}
        
    })
    form['comment'].value = '';
    rerender(globalActiveHabbitId);
    saveData();
}

function deleteDays(index) {
    habits = habits.map(habit => {
        if(habit.id === globalActiveHabbitId) {
            habit.days.splice(index, 1);
            return {
                ...habit,
                days: habit.days
            };
        }
        return habit;
    })
    rerender(globalActiveHabbitId);
    saveData();
}

function togglePopup(context) {
    if (context.classList.contains("menu__add") === true) {
        document.querySelector(".cover").classList.remove("cover_hidden");
        rerender(globalActiveHabbitId);
    }

    if (context.classList.contains("popup__close") === true) {
        document.querySelector(".cover").classList.add("cover_hidden");
        rerender(globalActiveHabbitId);
    }
}

/* working with habbits */
function setIcon(context, icon) {
    document.querySelector('.popup__form input[name="icon"]').value = icon;
    const activeIcon = document.querySelector('.icon.icon-active')
    activeIcon.classList.remove('icon-active')
    context.classList.add('icon-active')
}

function addHabit(event) {
    const form = event.target;
    const numbers = [1,2,3,4,5,6,7,8,9,0];
    event.preventDefault();
    const data = new FormData(event.target);
    const name = data.get('name');
    const target = data.get('target');
    const icon = data.get('icon');
    if (!name) {
        event.target['name'].classList.add('error')
    }
    if (!target) {
        event.target['target'].classList.add('error');
    }
    for (let i = 0; i<target.length; i++) {
        if (numbers.includes(Number(target[i])) === true) {
            continue;
        } else {
            console.log(target[i])
            form['target'].classList.add('error')}
    }

    document.querySelector('.name').addEventListener('keydown', (e) => {
        console.log(e)
        if (e.code!='Enter') {
            form['name'].classList.remove('error');
        };
    });

    document.querySelector('.target').addEventListener('keydown', (e) => {
        if (e.code!='Enter') {
            form['target'].classList.remove('error');
        };
    });

    document.querySelector('.popup__close').addEventListener('click', () => {
        form['name'].classList.remove('error');
        form['target'].classList.remove('error');
    })
    if(form['name'].classList.contains('error') === false && form['target'].classList.contains('error') === false) {
        const newHabit = {
            id: habits[habits.length-1].id + 1,
            icon,
            name,
            target,
            days: []
        }
        
        habits.push(newHabit);
        rerender(habits[habits.length-1].id);
        document.querySelector('.cover').classList.add('cover_hidden');
    }
    
}

function rerender(activeHabitId) {
    globalActiveHabbitId = activeHabitId;
	const activeHabit = habits.find(habit => habit.id === activeHabitId);
    document.location.replace(document.location.pathname + '#' + activeHabitId)
	rerenderMenu(activeHabit);
    rerenderHead(activeHabit);
    rerenderBody(activeHabit);
}

/* init */
(() => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''));
    const urlHabit = habits.find(habit => habit.id == hashId);
    if(urlHabit) {
        rerender(urlHabit.id);
    } else {
        rerender(habits[0].id);
    }
})();
