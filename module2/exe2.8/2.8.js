"use strict";


const students = ["Johnny", "DeeDee", "Joey", "Marky"]
function concat(array) {
    let concatResult = "";
    for (const element of array ) {
        concatResult += element;
    }
    return concatResult;
}

document.getElementById("target").innerHTML = concat(students);

