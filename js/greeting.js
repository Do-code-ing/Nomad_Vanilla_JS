'use strict';

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector("#background-img");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const clockUserWeatherInfo = document.querySelector("#info");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";
const USERNAME_KEY = "username";

function clockInsertToclockUserWeatherInfo() {
    clock.remove();
    clockUserWeatherInfo.insertBefore(clock, weatherInfo);
}

function disappear() {
    firstPage.classList.remove(APPEAR_CLASSNAME);
    firstPage.classList.add(DISAPPEAR_CLASSNAME);
    setTimeout(() => firstPage.classList.add(HIDDEN_CLASSNAME), 1000);
}

function appear() {
    secondPage.classList.add(APPEAR_CLASSNAME);
    clockInsertToclockUserWeatherInfo();
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    setTimeout(disappear, 0);
    localStorage.setItem(USERNAME_KEY, username);
    setTimeout(paintGreetings, 1000, username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    bgImage.src = `img/${chosenImage}`;
    setTimeout(appear, 0);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    firstPage.classList.add(APPEAR_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    firstPage.classList.add(HIDDEN_CLASSNAME);
    disappear();
    paintGreetings(savedUsername);
}