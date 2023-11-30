"use strict";

function rollDice() {
    return Math.floor(Math.random() * 6 + 1)
}

while (true) {
    const diceResult = rollDice()
    document.getElementById("target").innerHTML += `<li>${diceResult}</li>`
    if (diceResult === 6) {
        break;
    }
}