"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

alternatingColoursDiagonal();

function drawCircles() { 
    let size = 80;
    context.fillStyle = "lightblue";
    for (let i = 0; i < 7; i++) {
        for (let a = 0; a < 13; a++) {
            Utils.fillCircle(a * (size * 2),i * (size * 2), size);
        }
    }
}

function randomSizes() {
    context.fillStyle = Utils.hsla(195, 80, 79, 0.5);
    let distance = 80 * 2;
    for (let i = 0; i < 7; i++) {
        for (let a = 0; a < 13; a++) {
            let size = Math.random() * 125;
            Utils.fillCircle(a * distance, i * distance, size);
        }
    }
}

function descendingSizes() {
    context.fillStyle = Utils.hsla(195, 80, 79, 0.5);
    let distance = 80 * 2;
    for (let i = 0; i < 8; i++) {
        let size = 17 * (i + 1);
        for (let a = 0; a < 13; a++) {
            Utils.fillCircle(a * distance, i * distance, size);
        }
    }
}

function alternatingColoursHorizontal() {
    let size = 80;
    for (let i = 0; i < 13; i++) {
        if (i % 2 == 0) {
            context.fillStyle = Utils.rgb(255, 105, 97);
        } else {
            context.fillStyle = 'lightblue';
        }
        for (let a = 0; a < 7; a++) {
            Utils.fillCircle(i * (size * 2),a * (size * 2), size);
        }
    }
}

function alternatingColoursVertical() {
    let size = 80;
    for (let i = 0; i < 7; i++) {
        if (i % 2 == 0) {
            context.fillStyle = Utils.rgb(255, 105, 97);
        } else {
            context.fillStyle = 'lightblue';
        }
        for (let a = 0; a < 13; a++) {
            Utils.fillCircle(a * (size * 2),i * (size * 2), size);
        }
    }
}

function alternatingColoursDiagonal() {
    let size = 80;
    let circleID = 0;
    for (let i = 0; i < 7; i++) {
        for (let a = 0; a < 13; a++) {
            if (circleID % 2 == 0) {
                context.fillStyle = 'lightblue';
            } else {
                context.fillStyle = Utils.rgb(255, 105, 97);
            }
            Utils.fillCircle(a * (size * 2),i * (size * 2), size);
            circleID++;
        }
    }
}