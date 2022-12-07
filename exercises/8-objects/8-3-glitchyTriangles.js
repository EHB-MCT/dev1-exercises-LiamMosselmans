"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];

context.fillStyle = 'red';
context.beginPath();
context.moveTo(50,50);
context.lineTo(300,300);
context.lineTo(550,50);
context.lineTo(10,10);
context.fill();


function setup() {
    context.fillStyle = 'darkcyan';
    context.fillRect(0, 0, width, height);

    for(let i = 0; i < 30; i++) {
        let triangle = {
            strokeLength: 100,
            x: Utils.randomNumber(100, width - 100),
            y: height + 200,
            hue: Utils.randomNumber(0, 360)
        }
        triangles[i] = triangle;
    }
}

function update() {

}

function drawTriangle() {

}