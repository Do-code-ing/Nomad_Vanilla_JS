'use strict';

const weatherInfo = document.querySelector("#weatherinfo");
const weatherIcon = weatherInfo.querySelector("#weathericon");
const weather = weatherInfo.querySelector("p:nth-child(2)");
const city = weatherInfo.querySelector("p:last-child");
const API_KEY = "527bc277d5dc38c64055b1f238357ecf";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weather.innerText = `${Math.round(data.main.temp)}℃ ${data.weather[0].description}`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

setInterval(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError), 60000);