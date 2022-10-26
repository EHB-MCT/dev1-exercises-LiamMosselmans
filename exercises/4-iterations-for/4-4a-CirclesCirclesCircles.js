"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

drawCircles();

function drawCircles() { 
    for (let i = 0; i < 10; i++) {
        Utils.fillCircle()
    }
}
