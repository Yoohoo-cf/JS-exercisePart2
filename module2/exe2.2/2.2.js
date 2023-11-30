"use strict";

const num = prompt("Enter the number of participants: ")

const names = [];

for (let i = 0; i < num; i++){
    const name = prompt("Enter the names of all participants: ")
    names.push(name)
}

const sortedNames = names.sort()

const printNames = document.getElementById('target')

for (const name of sortedNames) {
   printNames.innerHTML += `<li>${name}</li>`
}

