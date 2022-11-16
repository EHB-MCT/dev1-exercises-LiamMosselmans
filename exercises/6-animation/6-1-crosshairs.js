"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrosshair;

drawCrosshair();

/**
* @param {MouseEvent} eventData
**/
function drawCrosshair(eventData) {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "red";
    context.lineWidth = 5;
    Utils.drawLine(eventData.pageX, 0, eventData.pageX, height);
    Utils.drawLine(0, eventData.pageY, width, eventData.pageY);
}