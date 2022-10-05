"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSunset();

function drawSunset() {
    // Draw sky
    context.beginPath();
    context.fillStyle = 'orange';
    context.fillRect(0,0,400,300);
    context.fill();

    // Draw sun
    context.beginPath();
    context.fillStyle = 'yellow';
    context.arc(200,300,150,Math.PI,Math.PI * 2,false);
    context.fill();

    // Draw ocean
    context.beginPath();
    context.fillStyle = 'blue';
    context.fillRect(0,300,400,150);
}