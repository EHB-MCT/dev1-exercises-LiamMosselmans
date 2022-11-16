"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let circleSpeedHorizontal = Utils.randomNumber(5, 15);
let circleSpeedVertical = Utils.randomNumber(5, 15);
let circleSize = 75;
let circleX = Utils.randomNumber(circleSize, width - circleSize);
let circleY = Utils.randomNumber(circleSize, height - circleSize);

window.onmousedown = stopCircle;

update();
stopCircle();

/**
* @param {MouseEvent} eventData
**/

function stopCircle(eventData) {
    if (eventData.pageX > (circleX - circleSize) && eventData.pageX < (circleX + circleSize) && eventData.pageY > (circleY - circleSize) && eventData.pageY < (circleY + circleSize)) {
        circleSpeedVertical = 0;
        circleSpeedHorizontal = 0;
    }
}

function update() {
    requestAnimationFrame(update);
        if(circleX + circleSize >= width && circleSpeedHorizontal > 0)
    {
        circleSpeedHorizontal *= -1;
    }
    if(circleX - circleSize <= 0 && circleSpeedHorizontal < 0)
    {
        circleSpeedHorizontal *= -1;
    }
    if(circleY + circleSize >= height && circleSpeedVertical > 0)
    {
        circleSpeedVertical *= -1;
    }
    if(circleY - circleSize <= 0 && circleSpeedVertical < 0)
    {
        circleSpeedVertical *= -1;
    }
    
    circleX += circleSpeedHorizontal;
    circleY += circleSpeedVertical;
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";
    Utils.fillCircle(circleX, circleY, circleSize);

    
 }