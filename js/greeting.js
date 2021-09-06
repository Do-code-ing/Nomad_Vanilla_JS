"use strict";

const firstPage = document.querySelector("#first-page");
const secondPage = document.querySelector("#second-page");

const clockUserWeatherInfo = document.querySelector("#info");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const APPEAR_CLASSNAME = "appear";
const DISAPPEAR_CLASSNAME = "disappear";
const USERNAME_KEY = "username";

function clockInsertToclockUserWeatherInfo() {
  clockUserWeatherInfo.insertBefore(clock, weatherInfo);
}

function firstPageDisappear() {
  firstPage.classList.remove(APPEAR_CLASSNAME);
  firstPage.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => (firstPage.style.display = "none"), 1000);
}

function secondPageAppear() {
  secondPage.style.display = "grid";
  secondPage.classList.remove(DISAPPEAR_CLASSNAME);
  secondPage.classList.add(APPEAR_CLASSNAME);
  loginInput.value = "";
  clockInsertToclockUserWeatherInfo();
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  setTimeout(firstPageDisappear, 0);
  localStorage.setItem(USERNAME_KEY, username);
  setTimeout(paintGreetings, 1000, username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  setTimeout(secondPageAppear, 0);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  firstPage.classList.add(APPEAR_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  firstPage.hidden = true;
  firstPageDisappear();
  paintGreetings(savedUsername);
}

// weather

const weatherInfo = document.querySelector("#weatherinfo");
const weatherIcon = weatherInfo.querySelector("#weathericon");
const weather = weatherInfo.querySelector("p:nth-child(1)");
const city = weatherInfo.querySelector("p:nth-child(2)");
const API_KEY = "527bc277d5dc38c64055b1f238357ecf";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = `${Math.round(data.main.temp)}℃ ${
        data.weather[0].description
      }`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  weatherIcon.src = "img/no_weather.png";
  weather.innerText = "Weather";
  city.innerText = "Unknown";
  alert("Can't find you. No weather for you.");
}

setInterval(
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError),
  60000
);

// Change name

const changeNameForm = document.getElementById("change-name");
const enterForm = document.getElementById("enter-form");

function secondPageDisappear() {
  secondPage.classList.remove(APPEAR_CLASSNAME);
  secondPage.classList.add(DISAPPEAR_CLASSNAME);
  setTimeout(() => (secondPage.style.display = "none"), 1000);
}

function firstPageappear() {
  firstPage.style.display = "block";
  firstPage.classList.remove(DISAPPEAR_CLASSNAME);
  firstPage.classList.add(APPEAR_CLASSNAME);
  enterForm.insertBefore(clock, loginForm);
}

function handleChangeName(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  secondPageDisappear();
  setTimeout(firstPageappear, 1000);
  loginForm.addEventListener("submit", onLoginSubmit);
}

changeNameForm.addEventListener("submit", handleChangeName);
