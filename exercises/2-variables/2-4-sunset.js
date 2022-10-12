"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSunset();

function drawSunset()
{
    let rectangleWidth = window.innerWidth;
    let rectangleHeight = window.innerHeight / 4;

    context.beginPath;
    // draw sky
    context.fillStyle = "goldenrod";
    context.fillRect(0,0,rectangleWidth,rectangleHeight);
    context.fillStyle = "orangered";
    context.fillRect(0,rectangleHeight,rectangleWidth,rectangleHeight);
    context.fillStyle = "darkred";
    context.fillRect(0,rectangleHeight * 2, rectangleWidth,rectangleHeight);
    context.fillStyle = "darkblue";
    context.fillRect(0,rectangleHeight * 3, rectangleWidth,rectangleHeight);

    // draw sun
    context.fillStyle = "lightyellow";
    context.arc(window.innerWidth / 2, rectangleHeight * 3, 550, Math.PI, Math.PI * 2, false);
    context.fill();
}