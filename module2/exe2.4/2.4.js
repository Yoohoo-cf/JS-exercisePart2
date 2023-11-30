"use strict";

const numbers = [];

let input;

do {
    input = parseFloat(prompt("Enter numbers(enter 0 to stop): "));
    numbers.push(input)
} while (input !== 0)

numbers.sort(function (a, b) {
    return b - a;
});

for (let i =0; i < numbers.length; i++){
    console.log(numbers[i])
}

