"use strict";

const dogNames = [];
for (let i = 0; i < 6; i++) {
    const name = prompt("Enter a dog name: ")
    dogNames.push(name)
}

const sortedDogNames = dogNames.sort().reverse()

for (const name of sortedDogNames) {
    document.getElementById("target").innerHTML += `<li>${name}</li>`
}