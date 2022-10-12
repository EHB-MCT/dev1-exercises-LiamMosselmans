"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let margin = 0;
let squareSize = 800;

let colorRandomOne;
let colorRandomTwo;
let colorRandomThree;
let colorSum;

for(let i = 0; i < 10; i++)
{
    coloredSquares(margin, squareSize, colorSum);
}


function coloredSquares(marginSquares, sizeSquares, color)
{
    colorSum = "#" + colorRandomOne + colorRandomOne + colorRandomTwo + colorRandomTwo + colorRandomThree + colorRandomThree;
    context.fillStyle = color;
    colorRandomOne = Math.floor(Math.random() * 10);
    colorRandomTwo = Math.floor(Math.random() * 10);
    colorRandomThree = Math.floor(Math.random() * 10);

    context.beginPath();
    context.fillStyle = "#" + colorRandomOne + colorRandomOne + colorRandomTwo + colorRandomTwo + colorRandomThree + colorRandomThree;
    context.fillRect(marginSquares, marginSquares, sizeSquares, sizeSquares);
    margin += 50;
    squareSize -= 100;
}