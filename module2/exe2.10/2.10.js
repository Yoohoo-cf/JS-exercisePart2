"use strict";

function initializeCandidates(candidatesNum) {
    let candidates = [];
    for (let i = 1; i <= candidatesNum; i++ ){
        const name = prompt(`Enter the Name for candidate ${i}`);
        candidates.push({
            name: name.toLowerCase(),
            votes: 0,
        })
    }
    return candidates;
}

function voting(candidates, votersNum){
    for (let i = 1; i <= votersNum; i++) {
         const vote = prompt(`Voter ${i}, enter the candidate name who you vote for: `).toLowerCase()
        const candidate = candidates.find(c => c.name === vote)
        if (candidate) {
        candidate.votes++;
    } else if (vote === '') {
        console.log("It is an empty vote")
    }
    }
}

function printVotes(candidates) {
    let winner = candidates[0];
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i]
        }
    }
    console.log(`The winner is ${winner.name} with ${winner.votes}`)
    for (const candidate of candidates ) {
        console.log(`${candidate.name}: ${candidate.votes} votes`)
    }
}

const candidatesNum = parseInt(prompt("The number of candidates? "))
const votersNum = parseInt(prompt("The number of voters? "))
const candidates = initializeCandidates(candidatesNum)
voting(candidates, votersNum)

printVotes(candidates)