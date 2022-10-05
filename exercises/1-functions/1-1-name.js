"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');
context.lineWidth = 10;
context.strokeStyle = 'red';

drawName();

function drawName() {
    context.beginPath();
    context.moveTo(50,25);
    context.lineTo(50,125);
    context.lineTo(100,125);
    context.stroke();

    context.beginPath();
    context.moveTo(130,125);
    context.lineTo(130,50);
    context.moveTo(130,35);
    context.lineTo(130,25);
    context.stroke();


    context.beginPath();
    context.moveTo(160,125);
    context.lineTo(210,25);
    context.lineTo(260,125);
    context.moveTo(180,85)
    context.lineTo(240,85);
    context.stroke();


    context.beginPath();
    context.moveTo(290,125);
    context.lineTo(325,25);
    context.lineTo(360,125);
    context.lineTo(395,25);
    context.lineTo(425,125);
    context.stroke();
}