"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawCircles();

function drawCircles() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    let distanceX = Utils.calculateDistance(width / 2, height / 2, width / 4, height / 2);
    let distanceY = Utils.calculateDistance(width / 2, height / 2, width / 2, height / 3);
    for(let i = 0; i < 100000; i++) {
        let circleX = Math.random() * width;
        let circleY = Math.random() * height;
        if (circleX > (width / 2) - distanceX && circleX < (width / 2) + distanceX && circleY > (height / 2) - distanceY && circleY < (height / 2) + distanceY) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(circleX, circleY, 2);
    }
}