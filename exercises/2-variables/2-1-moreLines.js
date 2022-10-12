"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let margin = 200;

drawLines(margin);

function drawLines(margin)
{  
    let y = 20;
    let lineHeight = 100;
    context.beginPath();
    context.moveTo(margin, y);
    context.lineTo(canvas.width - margin, y);
    context.lineTo(margin, y + lineHeight);
    context.lineTo(canvas.width - margin, y + lineHeight);
    context.lineTo(margin, y + (lineHeight * 2));
    context.lineTo(canvas.width - margin, y + (lineHeight * 2));
    context.lineTo(margin, y + (lineHeight * 3));
    context.lineTo(canvas.width - margin, y + (lineHeight * 3));
    context.lineTo(margin, y + (lineHeight * 4));
    context.lineTo(canvas.width - margin, y + (lineHeight * 4));
    context.lineTo(margin, y + (lineHeight * 5));
    context.lineTo(canvas.width - margin, y + (lineHeight * 5));
    context.lineTo(margin,y);
    context.lineWidth = 3;
    context.stroke();
}