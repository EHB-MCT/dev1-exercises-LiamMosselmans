"use strict";

import context from "./context.js";

export function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function strokeCircle(x, y, radius){
    context.beginPath();
    context.arc(x,y, radius, radius, 0, 2 * Math.PI, false);
    context.stroke();
}

export function fillCircle(x, y, radius){
    context.beginPath();
    context.arc(x,y, radius, radius, 0, 2 * Math.PI, false);
    context.fill();
}

export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function hsla(h, s, l, a){
    let hsla = "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
    return hsla;
}