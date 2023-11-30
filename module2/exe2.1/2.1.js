"use strict";

const array = [];

for (let x = 0; x < 5; x++) {
    const numInArray = parseInt(prompt("Enter a number: "))
    array.push(numInArray)
}

const reversedArray = [];

for ( let i = 5 - 1 ; i >= 0; i--) {
    const valueAtIndex = array[i]
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)
