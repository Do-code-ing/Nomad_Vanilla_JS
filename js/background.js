'use strict';

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = `url(img/${chosenImage})`;