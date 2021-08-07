'use strict';

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

'use strict';

const weatherInfo = document.querySelector("#weatherinfo");
const weatherIcon = weatherInfo.querySelector("#weathericon");
const weather = weatherInfo.querySelector("p:nth-child(2)");
const city = weatherInfo.querySelector("p:last-child");
const API_KEY = "527bc277d5dc38c64055b1f238357ecf";
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

// weather
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weather.innerText = `${Math.round(data.main.temp)}℃ ${data.weather[0].description}`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    weatherIcon.src = "img/no_weather.png";
    weather.innerText = "Weather"
    city.innerText = "Unknown"
    alert("Can't find you. No weather for you.");

}

setInterval(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError), 60000);