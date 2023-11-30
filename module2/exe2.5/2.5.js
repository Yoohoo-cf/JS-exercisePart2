"use strict";

const numbers = [];

let loop = true;

while (loop) {

    const input = parseFloat(prompt("Enter a number(A number that you previously entered will stop the function): "))

    if (numbers.includes(input)) {
        alert("The number has already been given")
        break;
    } else {
        numbers.push(input)
    }
}

numbers.sort(function(a, b){
    return a - b;
})

for (const number of numbers ) {
    console.log(number)
}
