"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();

update();

function setup() {
    for(let i = 0; i < 30; i++) {
        let balloon = {
            hSize: 100,
            vSize: 200,
            x: Utils.randomNumber(100, width - 100),
            y: height + 200,
            hue: Utils.randomNumber(0, 360)
        }
        balloons[i] = balloon;
    }
}

function update() {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < balloons.length; i++) {
        let balloon = balloons[i];
        balloon.x += Utils.randomNumber(-2, 2);
        balloon.y -= Utils.randomNumber(0, 5);
        drawBalloon(balloon);
    }
    console.log(balloons[5].y);
    requestAnimationFrame(update)
}

function drawBalloon(balloon) {
    context.fillStyle = Utils.hsl(balloon.hue, 50, 50);
    Utils.fillEllipse(balloon.x, balloon.y, balloon.hSize / 2, balloon.vSize / 2);
    context.fillStyle = 'black';
    context.fillRect(balloon.x - balloon.hSize / 16, balloon.y + balloon.vSize / 2, balloon.hSize / 8, balloon.vSize / 2);
}