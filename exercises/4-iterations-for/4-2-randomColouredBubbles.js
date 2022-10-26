"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let margin = 200;

context.fillStyle = "black";
context.fillRect(0,0,width,height);
drawCircles();

function drawCircles() {
    for(let i = 0; i<100; i++) {
        let circleRadius = Math.floor(Math.random() * 101);

        let marginWidth = width - (2 * margin);
        let marginHeight = height - (2 * margin);

        let circlePositionX = Math.floor(Math.random() * marginWidth) + margin;
        let circlePositionY = Math.floor(Math.random() * marginHeight) + margin;

        let h = Math.floor(Math.random() * 361);
        let s = Math.floor(Math.random() * 101);
        let l = Math.floor(Math.random() * 101);
        let a = Math.random();

        context.fillStyle = Utils.hsla(h, s, l, a);
        Utils.fillCircle(circlePositionX, circlePositionY, circleRadius);
    }    
}