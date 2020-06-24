import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

const add = document.querySelector(".buttons__add--js");
const remove = document.querySelector(".buttons__remove--js");
const counter = document.querySelector(".container__counter--js");
const key = new Date().toLocaleString().slice(0, 10);
const water = document.querySelector(".container__water");

const localStorageValue = localStorage.getItem(key);
let bubbles = document.querySelectorAll(".bubble--js");

let currentCounter = 0;

if (localStorageValue) {
  currentCounter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

counter.innerHTML = currentCounter;

if (currentCounter == 0) {
  water.classList.add("container__water--begin");
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].classList.remove("bubble");
  }
}

add.addEventListener("click", () => {
  if (currentCounter == 0) {
    water.classList.add("container__water--fill");
    water.classList.remove("container__water--empty");
    water.classList.remove("container__water--begin");
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].classList.add("bubble");
    }
  }
  currentCounter++;
  counter.innerHTML = currentCounter;
  localStorage.setItem(key, currentCounter);
});

remove.addEventListener("click", () => {
  if (currentCounter > 0) {
    currentCounter--;
  }
  if (currentCounter == 0) {
    water.classList.remove("container__water--fill");
    water.classList.add("container__water--empty");
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].classList.remove("bubble");
    }
  }
  localStorage.setItem(key, currentCounter);
  counter.innerHTML = currentCounter;
});
