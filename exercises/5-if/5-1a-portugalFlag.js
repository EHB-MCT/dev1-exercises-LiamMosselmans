"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let circleX = Math.random() * width;
        let circleY = Math.random() * height;
        if (circleX < width / 2) {
            context.fillStyle = 'red';
        } else {
            context.fillStyle = 'green';
        }
        Utils.fillCircle(circleX, circleY, 2);
    }
}