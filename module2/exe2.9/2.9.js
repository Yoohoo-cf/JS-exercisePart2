"use strict";

function even(array){
    let evenArray = []
    for (const number of array) {
        if (number % 2 === 0) {
            evenArray.push(number)
        }
    }
    return evenArray;
}

const numArray = [2, 7, 4, 12, 13, 16, 17, 21, 90];
const eArray = even(numArray)
console.log(`The orginal array is: ${numArray} and the new array is ${eArray}`)