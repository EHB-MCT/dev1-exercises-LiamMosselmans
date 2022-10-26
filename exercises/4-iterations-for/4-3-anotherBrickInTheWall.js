"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBricks();

function drawBricks() {
    context.fillStyle = "#8b0000";
    for (let i = 2; i <= 7; i++) {
        for (let b = 1; b <= 6; b++) {
            let evenSpace = (i % 2) * 50;
            context.fillRect((100 + evenSpace) + 100 * b, 50 * i, 75, 30);
        }
    }
}