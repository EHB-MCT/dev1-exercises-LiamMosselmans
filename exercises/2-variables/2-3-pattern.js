"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let smallRectangleWidth = window.innerWidth / 3;
let smallRectangleHeight = window.innerHeight / 7;
let bigRectangleWidth = smallRectangleWidth * 3;
let bigRectangleHeight = smallRectangleHeight * 2.5;

createPattern(smallRectangleWidth,smallRectangleHeight,bigRectangleWidth,bigRectangleHeight);

function createPattern(smallWidth, smallHeight, bigWidth, bigHeight)
{
    context.beginPath();
    // draw dark blue squares
    context.fillStyle = "darkblue";
    context.fillRect(0,0,smallWidth,smallHeight);
    context.fillRect(smallWidth * 2, 0, smallWidth, smallHeight);
    context.fillRect(0, smallHeight + bigHeight, smallWidth, smallHeight);
    context.fillRect(smallWidth * 2, smallHeight + bigHeight, smallWidth, smallHeight);

    // draw orangered square
    context.fillStyle = "orangered";
    context.fillRect(0, smallHeight, bigWidth, bigHeight);

    // draw light blue squares
    context.fillStyle = "lightblue";
    context.fillRect(0, smallHeight * 2 + bigHeight, smallWidth, bigHeight);
    context.fillRect(smallWidth * 2, smallHeight * 2 + bigHeight, smallWidth, bigHeight);
}