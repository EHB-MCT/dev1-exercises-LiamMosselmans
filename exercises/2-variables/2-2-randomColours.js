"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let margin = 0;
let squareSize = 800;

for(let i = 0; i < 10; i++)
{
    coloredSquares(margin, squareSize);
}

function coloredSquares(marginSquares, sizeSquares)
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = "rgb(" + red + "," + green + "," + blue + ")";

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(marginSquares, marginSquares, sizeSquares, sizeSquares);
    margin += 50;
    squareSize -= 100;
}