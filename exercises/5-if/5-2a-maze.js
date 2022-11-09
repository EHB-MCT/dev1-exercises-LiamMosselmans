"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

generateMaze();

function generateMaze() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.lineWidth = 5;
    context.lineCap = "square";
    context.strokeStyle = "grey";


    for(let i = 0; i <= 100; i++) {
        for(let a = 0; a <=200; a++) {
            let distance = 10;
            let randomNumber = Math.round(Math.random())
            if (randomNumber == 0) {
                Utils.drawLine(10*a, 10*i, 10*a+10, 10*i+10);
            } else { 
                Utils.drawLine(10*a, 10*i+10, 10*a+10, 10*i);
            }
        } 
    }
}