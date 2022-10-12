"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawStarryNight();

function drawStarryNight() {
    // Draw background
    context.beginPath();
    context.fillStyle = 'orange';
    context.fillRect(50,50,450,450);

    // Draw circles
    context.beginPath();
    context.fillStyle = 'white'; 
    context.arc(75,75,200,0, Math.PI * 2,false);
    context.arc(475,75,200,0, Math.PI * 2,false);
    context.arc(75,475,200,0, Math.PI * 2,false);
    context.arc(475,475,200,0, Math.PI * 2,false);
    context.fill();

    // Draw lines
    context. beginPath();
    context.moveTo(75,75);
    context.lineTo(475,475);
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.stroke();
}