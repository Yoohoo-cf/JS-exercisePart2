"use strict";

function rollDice(sidesNum) {
    return Math.floor(Math.random() * sidesNum + 1)
}

const sidesNum = parseInt(prompt("How many side does your dice have? "))

while (true) {
    const diceResult = rollDice(sidesNum)
    document.getElementById("target").innerHTML += `<li>${diceResult}</li>`
    if (diceResult === sidesNum) {
        break;
    }
}