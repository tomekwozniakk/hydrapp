import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const add = document.querySelector('.buttons__add--js');
const remove = document.querySelector('.buttons__remove--js');
const counter = document.querySelector('.container__counter--js');
const key = new Date().toLocaleString().slice(0, 10);
const water = document.querySelector('.container__water');


if(localStorage.getItem(key, counter.value)) {
    counter.value = localStorage.getItem(key, counter.value);
    counter.innerHTML = counter.value;
}
else {
    counter.value = 0;
    localStorage.setItem(key, counter.value);
    counter.innerHTML = counter.value;
}

if(counter.value == 0) {
    water.classList.add('container__water--begin');
}

add.addEventListener('click', () => {
    if(counter.value == 0) {
        water.classList.add('container__water--fill');
        water.classList.remove('container__water--empty');
        water.classList.remove('container__water--begin');
    }
    counter.value++;
    counter.innerHTML = counter.value;
    localStorage.setItem(key, counter.value);
})

remove.addEventListener('click', () => {
    counter.value--;
    if(counter.value < 0) {
        counter.value = 0;
    }
    if(counter.value == 0) {
        water.classList.remove('container__water--fill');
        water.classList.add('container__water--empty')
    }
    localStorage.setItem(key, counter.value);
    counter.innerHTML = counter.value;
})

