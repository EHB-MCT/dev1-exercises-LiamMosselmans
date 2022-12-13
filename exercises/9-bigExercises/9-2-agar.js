"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let cells = [];

setup();
draw();


function setup() {
    for (let i = 0; i < 15; i++) {
        let cell = {
            x: Utils.randomNumber(75, width - 75),
            y: Utils.randomNumber(75, height - 75),
            xSpeed:Utils.randomNumber(-3, 3),
            ySpeed:Utils.randomNumber(-3, 3),
            size: Utils.randomNumber(15, 75),
            hue: Utils.randomNumber(0, 360)
        };
        cells.push(cell);
    }
}

function draw() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    for(let i = 0; i < cells.length; i++) {
        if(Utils.randomNumber(1,30) == 1) {
            cells[i].xSpeed = Utils.randomNumber(-3, 3);
            cells[i].ySpeed = Utils.randomNumber(-3, 3);
        }
        context.fillStyle = Utils.hsl(cells[i].hue, 50, 50);
        Utils.fillCircle(cells[i].x, cells[i].y, cells[i].size);
        cells[i].x += cells[i].xSpeed;
        cells[i].y += cells[i].ySpeed;

        // Collision cell & window
        if(cells[i].x - cells[i].size <= 0) {
            cells[i].xSpeed *= -1;
        }
        if(cells[i].x + cells[i].size >= width) {
            cells[i].xSpeed *= -1;
        }
        if(cells[i].y - cells[i].size <= 0) {
            cells[i].ySpeed *= -1;
        }
        if(cells[i].y + cells[i].size >= height) {
            cells[i].ySpeed *= -1;
        }

     // Collision cell & cell
        for(let a = 0; a < cells.length; a++) {
            if(cells[i].size > cells[a].size) {
                if(cells[i].x - cells[i].size <= cells[a].x + cells[a].size && cells[i].x + cells[i].size >= cells[a].x - cells[a].size) {
                    if(cells[i].y - cells[i].size <= cells[a].y + cells[a].size && cells[i].y + cells[i].size >= cells[a].y - cells[a].size) {
                        cells[i].size += 10;
                        cells.splice(a, 1);
                    }
                }
            } else {
                if(cells[i].x - cells[i].size <= cells[a].x + cells[a].size && cells[i].x + cells[i].size >= cells[a].x - cells[a].size) {
                    if(cells[i].y - cells[i].size <= cells[a].y + cells[a].size && cells[i].y + cells[i].size >= cells[a].y - cells[a].size) {
                        cells[i].size += 10;
                        cells.splice(i, 1);
                    }
                }
            }
        }
    }
    requestAnimationFrame(draw);
}