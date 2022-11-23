"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let numbers = new Array();
for (let i = 0; i < 1000; i++) {
    numbers[i] = Utils.randomNumber(0,100);
}

calculateAverage(numbers);

function calculateAverage(numbers) {
    let summary = 0;
    for (let i = 0; i < 1000; i++) {
        summary += numbers[i];
    }
    let average = summary / numbers.length;
    console.log(average);
}